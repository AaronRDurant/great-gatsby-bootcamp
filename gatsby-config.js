module.exports = {
  siteMetadata: {
    title: "A Simple Gatsby Site",
    author: "Aaron Durant",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      }
    },
  ],
}
