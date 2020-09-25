import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

// import "../utils/global.scss"
import "../utils/normalize.css";
import "../utils/css/screen.css";
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="⛰" keywords={[`bozeman`, `bozangeles`, `boz angeles`]} />
      <div className="home">
        {data.site.siteMetadata.description && (
          <header className="page-head">
            <h2 className="page-head-title">
              {data.site.siteMetadata.description}
            </h2>
          </header>
        )}
      </div>
      <h2 className="subtitle">Be here soon</h2>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);
