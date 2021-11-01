import React from 'react'
import { Link } from 'gatsby'

const HomePage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Aaron, a web developer living in Michigan.</h2>
      <p>Need a developer? <Link to="/contact">Get in touch</Link>.</p>
    </div>
  )
}

export default HomePage
