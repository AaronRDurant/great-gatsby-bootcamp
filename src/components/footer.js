import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { footer, pancakes } from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <p className={footer}>
      Made with
      <span role="img" aria-label="Pancakes emoji" className={pancakes}> 🥞 </span>
      by {data.site.siteMetadata.author} in 2021.
    </p>
  )
}

export default Footer
