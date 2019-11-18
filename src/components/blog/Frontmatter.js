import React from 'react';
import PropTypes from 'prop-types';

const Frontmatter = ({
  title = null,
  author = null,
  coauthors = null,
  date = null,
  time = null,
  keywords = null,
  category = null,
  tags = null,
}) => {
  return (
    <div className="frontmatter">
      <span className="frontmatterAuthor">{author}</span>&nbsp;
      {category && <span className="frontmatterCategory">{category}</span>}
      {tags && (
        <span className="frontmatterTags">
          {tags.map(tag => {
            return <span className="badge green">{tag}</span>;
          })}
        </span>
      )}
    </div>
  );
};

Frontmatter.propTypes = {
  author: PropTypes.string.isRequired,
};

export default Frontmatter;
