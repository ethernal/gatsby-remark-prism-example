import React from 'react'

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> by Sebastian Pieczyński
    </footer>
  )
}

export default Footer
