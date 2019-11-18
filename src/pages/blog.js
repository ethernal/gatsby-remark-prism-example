import React from 'react';
import { Link } from 'gatsby';
import BlogItem from '../components/blog/BlogItem';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import BlogLayout from '../components/templates/GlobalLayout';
import SEO from '../components/seo';

const BlogPage = props => {
  const postList = props.data.allMdx.nodes;
  const postLinks = props.data.allMdx.edges;

  console.log(postList);

  return (
    <BlogLayout>
      <SEO title="Blog Posts"></SEO>

      {postList.map((post, postKey) => (
        <BlogItem post={post} key={postKey} />
      ))}
    </BlogLayout>
  );
};

export default BlogPage;

export const listBlogPostsQuery = graphql`
  query AllBlogPostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
      nodes {
        frontmatter {
          title
          author
          category
          date(locale: "pl", formatString: "YYYY-MM-DD")
          tags
          keywords
          time
          cover {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        timeToRead
        tableOfContents(maxDepth: 2)
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;
