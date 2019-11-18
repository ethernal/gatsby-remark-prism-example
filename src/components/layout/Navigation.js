import React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav>
      <ul style={{ margin: "0 auto" }}>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
