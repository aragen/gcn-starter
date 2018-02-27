import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'

const Index = ({data}) =>  {

  const posts = data.allContentfulPost.edges;

  return (
    <div>

      <section>

        <header>
          <h1>A blog made with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>, <a href="https://www.contentful.com/" target="_blank">Contentful</a> and <a href="https://www.netlify.com/" target="_blank">Netlify</a> <span>🎉</span></h1>
        </header>

        {posts && (
          <ul>
             {posts.map(({ node: post, index }) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.slug}/`}>
                    <img sizes={post.heroImage.sizes} backgroundColor={'#EEEEEE'} />
                    <h3>{post.title}</h3>
                  </Link>
                </li>
             ))}
          </ul>
        )}

      </section>

    </div>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
      edges {
        node {
          title
          id
          slug
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
          publishDate
        }
      }
    }
  }
`

export default Index
