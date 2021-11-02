import React from 'react'
import { footer, pancakes } from './footer.module.scss'

const Footer = () => {
  return (
    <p className={footer}>
      Made with
      <span role="img" aria-label="Pancakes emoji" className={pancakes}> 🥞 </span>
      by Aaron Durant in 2021.
    </p>
  )
}

export default Footer
