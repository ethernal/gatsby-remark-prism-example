import React, { Fragment, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import M from 'materialize-css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';
//import "./layout.css"

const GlobalLayout = props => {
  const { children, afterNav } = props;

  useEffect(() => {
    M.AutoInit();
  }, []);
  const data = useStaticQuery(graphql`
    query SiteMetaTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header />
      <Navigation />
      {/* {afternav && <div className="heroImage">{afterNav}</div>} */}
      <div className="container">
        <main>{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default GlobalLayout;
