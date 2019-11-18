import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => (
  <div>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 175) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
