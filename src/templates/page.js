import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Body from '../components/body'

const PageTemplate = ({data}) => {

  const {
    title,
    id,
    slug,
    body,
  } = data.contentfulPage;

  return(
    <div>

    <Helmet>
      <h1>{`${title} - ${config.siteTitle}`}</h1>
      <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
      <meta property="og:url" content={`${config.siteUrl + config.pathPrefix}${slug}/`} />
    </Helmet>

    <section>
      <h1>{title}</h1>
      <Body dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
    </section>

  </div>
  )
}

export const query = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      title
      id
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default PageTemplate
