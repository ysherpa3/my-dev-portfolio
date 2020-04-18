import { Box, Button, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/SendSharp";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React, { useState } from "react";
import * as Yup from "yup";
import MuiTheme from "../common/mui-theme";

/**
 * Contact section - Contact form
 * Content:
 *  - name input
 *  - email input
 *  - message input
 *  - submit button
 */

const useStyles = makeStyles({
  // Styles applied to error message
  error: {
    color: MuiTheme.palette.error.main,
  },
  // Styles applied to success message
  success: {
    color: MuiTheme.palette.success.main,
  },
});

// Yup validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter your email in the following format: email@example.com")
    .required("Please enter your email address"),
  message: Yup.string().required("Please enter your message"),
});

const ContactForm = () => {
  const classes = useStyles();
  const [serverState, setServerState] = useState();

  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleSubmit = (values, actions) => {
    Axios({
      method: "POST",
      url: "https://formspree.io/meqldqjw",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          "Thank you for contacting me! I will get back to you as soon as possible.",
        );
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <Field
            component={TextField}
            fullWidth
            id="name-input"
            inputProps={{ "aria-label": "please enter your name" }}
            label="Name"
            margin="normal"
            name="name"
            required
            type="text"
          />
          <Field
            component={TextField}
            fullWidth
            id="email-input"
            inputProps={{ "aria-label": "please enter your email address" }}
            label="Email"
            margin="normal"
            name="email"
            required
            type="email"
          />
          <Field
            component={TextField}
            fullWidth
            id="message-input"
            inputProps={{ "aria-label": "please enter your message" }}
            label="Message"
            margin="normal"
            multiline
            name="message"
            required
            rows={4}
            type="text"
          />
          {isSubmitting && <LinearProgress />}
          <Box textAlign="center" mt={4}>
            <Button
              disabled={isSubmitting}
              endIcon={<SendIcon />}
              size="large"
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Box>
          {serverState && (
            <Box mt={4} textAlign="center">
              <Typography
                className={!serverState.ok ? classes.error : classes.success}
              >
                {serverState.msg}
              </Typography>
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
