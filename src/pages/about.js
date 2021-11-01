import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Hey there!
        <span role="img" aria-label="Hand waving emoji"> 👋🏻</span>
      </p>
      <p>I'm Aaron Durant. Currently, I'm improving my web development skills by going through <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp's</a> curriculum as well as many resources on YouTube and the greater internet. In this case, I'm following along with a YouTube video from freeCodeCamp to further my familiarity with React and Gatsby.</p>
      <p>Feel free to <Link to="/contact">get in touch</Link>!</p>
    </div>
  )
}

export default AboutPage