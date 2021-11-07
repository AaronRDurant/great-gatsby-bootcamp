import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div>
        <h2>Contact</h2>
        <p>My boss at my first job always said he only hired me because I had my own email address.</p>
        <p>That's the whole story. Anyway:</p>
        <p><a href="mailto:aaron@aarondurant.com">aaron@aarondurant.com</a></p>
        <p>Oh, and that Twitter thing: <a href="https://twitter.com/AaronRDurant">@AaronRDurant</a></p>
      </div>
    </Layout>
  )
}

export default ContactPage
