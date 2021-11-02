import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const HomePage = () => {
  return (
    <Layout>
      <h2>Hello.</h2>
      <h3>I'm Aaron, a web developer living in Michigan.</h3>
      <p>Need a developer? <Link to="/contact">Get in touch</Link>.</p>
    </Layout>
  )
}

export default HomePage
