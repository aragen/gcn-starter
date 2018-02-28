import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'

import { Card, Divider, Grid, Icon, Image, Header } from 'semantic-ui-react';

const Index = ({data}) =>  {

  const posts = data.allContentfulPost.edges;

  return (
    <section>

      <header style={{marginTop: '5rem'}}>
        <Header as='h1' textAlign='center'>
          Made with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>, <a href="https://www.contentful.com/" target="_blank">Contentful</a> and <a href="https://www.netlify.com/" target="_blank">Netlify</a> <span>🎉</span>
        </Header>
      </header>

      <Divider section hidden />

      <Grid>
        <Grid.Row>
        {posts.map(({ node: post, index }) => (
          <Grid.Column mobile={12} tablet={12} computer={12} key={post.id} style={{margin: '1rem 0'}}>
            <Link to={`/posts/${post.slug}/`}>
              <Card fluid>
                <Img sizes={post.heroImage.sizes} />
                <Card.Content>
                  <Card.Header>
                    {post.title}
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Joined in 2015
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        ))}
        </Grid.Row>
      </Grid>

    </section>
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
