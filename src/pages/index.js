import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>Howdy.</h2>
      <p>My name is Aaron Durant. I'm a web developer in Michigan.</p>
      <p>I made this simple Gatsby website while watching The Great Gatsby Bootcamp from Andrew Mead on YouTube.</p>
    </Layout>
  )
}

export default HomePage
