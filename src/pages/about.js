import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <h2>About</h2>
        <p>
          Hey there!
          <span role="img" aria-label="Hand waving emoji"> 👋🏻</span>
        </p>
        <p>I'm Aaron Durant. Currently, I'm improving my web development skills by going through the <a href="https://www.freecodecamp.org">freeCodeCamp</a> curriculum as well as many resources on YouTube and elsewhere on the internet. In this case, I'm following along with a YouTube video from freeCodeCamp to further my familiarity with React and Gatsby.</p>
      </div>
    </Layout>
  )
}

export default AboutPage
