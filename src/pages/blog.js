import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { posts, post } from './blog.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields:publishedDate,
          order:DESC,
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM D, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h2>Blog</h2>
      <ol className={posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
