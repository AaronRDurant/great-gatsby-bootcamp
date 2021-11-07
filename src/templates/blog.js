import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM D, YYYY")
      body {
        raw
      }
    }
  }
`

const Blog = props => {
  const content = JSON.parse(props.data.contentfulBlogPost.body.raw);

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(content)}
    </Layout>
  )
}

export default Blog
