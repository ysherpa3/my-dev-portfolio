import {
  Box,
  Button,
  FormControl,
  LinearProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { navigate } from "gatsby";
import React, { useState } from "react";
import * as Yup from "yup";
import theme from "../common/mui-theme";

/**
 * Contact section - Contact form
 * Content:
 *  - name input
 *  - email input
 *  - message input
 *  - submit button
 */

const useStyles = makeStyles({
  label: {
    textAlign: "left",
    margin: theme.spacing(0.5, 0),
  },
  form: {
    padding: theme.spacing(0, 1),
  },
});

// Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .email("Please enter your email in the following format: name@example.com")
    .required("Please enter your email address."),
  message: Yup.string().required("Please enter your message."),
});

const ContactForm = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const [serverState, setServerState] = useState();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // Handle server response
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  return (
    <Formik
      // Initiail form input values
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      // Yup validation
      validationSchema={validationSchema}
      // Handle submit
      onSubmit={(data, { resetForm, setSubmitting }) => {
        fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: encode({
            "form-name": "portfolio-contact",
            ...data,
          }),
        })
          .then(() => {
            setProgress(50);
            setSubmitting(false);
            resetForm();
            setProgress(100);
            handleServerResponse(
              true,
              "Thank you for contacting me. I will be in touch with you soon."
            );
          })
          .catch((error) => {
            setSubmitting(false);
            handleServerResponse(false, "Oops! Something went wrong ...");
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form
          className={classes.form}
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          method="post"
          name="portfolio-contact"
          noValidate
        >
          <Field name="form-name" type="hidden" value="portfolio-contact" />
          {/* Name input */}
          <FormControl component="fieldset" fullWidth margin="dense">
            <Typography variant="srOnly" component="legend">
              Your Name
            </Typography>
            <Field
              as={TextField}
              id="name"
              label="Your Name"
              margin="dense"
              name="name"
              type="text"
            />
            <ErrorMessage className="error" component="div" name="name" />
          </FormControl>
          {/* Email input */}
          <FormControl component="fieldset" fullWidth margin="dense">
            <Typography variant="srOnly" component="legend">
              Your Email Address
            </Typography>
            <Field
              as={TextField}
              id="email"
              label="Your Email Address"
              margin="dense"
              name="email"
              type="email"
            />
            <ErrorMessage className="error" component="div" name="email" />
          </FormControl>
          {/* Message input */}
          <FormControl component="fieldset" fullWidth margin="dense">
            <Typography variant="srOnly" component="legend">
              Your Message
            </Typography>
            <Field
              as={TextField}
              id="review"
              label="Your Message"
              margin="dense"
              multiline
              name="message"
              rows={7}
              type="text"
            />
            <ErrorMessage className="error" component="div" name="message" />
          </FormControl>
          {/* Submit button */}
          <Box my={3} textAlign="center">
            {!isSubmitting ? (
              <Button
                disabled={isSubmitting}
                endIcon={<SendIcon />}
                type="submit"
                variant="contained"
              >
                Send Message
              </Button>
            ) : (
              <LinearProgress
                color="primary"
                value={progress}
                variant="determinate"
              />
            )}
          </Box>
          {/* Server response message */}
          <Box my={3}>
            {serverState && (
              <Typography
                color={!serverState.ok ? "error" : "primary"}
                variant="body1"
              >
                {serverState.msg}
              </Typography>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
