import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * SEO component
 */

const SEO = ({ pathname }) => {
  const { site } = useStaticQuery(query);

  const {
    buildTime,
    siteMetadata: {
      author,
      defaultDescription,
      defaultTitle,
      image,
      siteLanguage,
      siteUrl,
    },
  } = site;

  const seo = {
    description: defaultDescription,
    image: image,
    language: siteLanguage,
    title: defaultTitle,
    url: `${siteUrl}${pathname || ""}`,
  };

  const schemaOrgWebSite = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    author: {
      "@type": "Person",
      name: author,
    },
    copyrightYear: new Date().getFullYear(),
    dateModified: buildTime,
    description: defaultDescription,
    image: image,
    inLanguage: siteLanguage,
    isFamilyFriendly: true,
    locationCreated: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "VA",
      },
    },
    mainEntity: siteUrl,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <html lang={seo.language} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&family=Roboto&family=Roboto+Condensed:wght@400;700&display=swap"
        media="screen"
        rel="stylesheet"
        crossOrigin
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebSite)}
      </script>
    </Helmet>
  );
};

export default SEO;

SEO.defaultProps = {
  description: null,
  pathname: null,
  title: null,
};

// Site metadata query
export const query = graphql`
  {
    site {
      siteMetadata {
        author
        defaultDescription
        defaultTitle
        image
        siteLanguage
        siteUrl
      }
    }
  }
`;
