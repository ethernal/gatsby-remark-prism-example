import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const BlogItem = ({ post, postKey, variant = 'withExcerpt' }) => {
  switch (variant) {
    case 'small':
    case 'withTitleOnly':
      return (
        <Fragment>
          <div className={`post-${variant}`}>
            <Link
              to={'/blog/' + post.fields.slug}
              key={postKey}
              className="link"
            >
              <h1>{post.frontmatter.title}</h1>
            </Link>
          </div>
        </Fragment>
      );
    case 'medium':
    case 'withNoExcerpt':
      return (
        <Fragment>
          <div className={`post-${variant}`}>
            <Link
              to={'/blog/' + post.fields.slug}
              key={postKey}
              className="link"
            >
              <h1>{post.frontmatter.title}</h1>
            </Link>
            <span>{post.frontmatter.author}</span> on{' '}
            <span>{post.frontmatter.date}</span>
          </div>
        </Fragment>
      );
    case 'large':
    case 'withExcerpt':
    default:
      return (
        <Fragment>
          <div className={`post-${variant}`}>
            <Link
              to={'/blog/' + post.fields.slug}
              key={postKey}
              className="link"
            >
              <h1>{post.frontmatter.title}</h1>
            </Link>
            <span>{post.frontmatter.author}</span> on{' '}
            <span>{post.frontmatter.date}</span>
            <p>{post.excerpt}</p>
          </div>
        </Fragment>
      );
  }
};

BlogItem.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
  }),
};

export default BlogItem;
