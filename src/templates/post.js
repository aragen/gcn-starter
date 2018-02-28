import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import find from "lodash.find"
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Hero from '../components/Hero'
import Tags from '../components/Tags'
import Body from '../components/body'

const PostTemplate = ({data}) => {

  const {
    title,
    id,
    slug,
    heroImage,
    description,
    body,
    author,
    publishDate,
    tags,
  } = data.contentfulPost;

  const postIndex = find(
    data.allContentfulPost.edges,
    ({ node: post }) => post.id === id
  );

  return(
    <div>

    <Helmet>
      <title>{`${title} - ${config.siteTitle}`}</title>
      <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
      <meta property="og:url" content={`${config.siteUrl + config.pathPrefix}/posts/${slug}/`} />
      <meta property="og:image" content={heroImage.sizes.src} />
    </Helmet>

    <Hero title={title} image={heroImage.sizes} height={'50vh'}/>

    <section>

      {tags && (<Tags items={tags} />)}

      <Body dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />

      <div >
        {postIndex.previous && (<Link to={`/posts/${postIndex.previous.slug}/`}>Prev Post</Link>)}
        {postIndex.next && (<Link to={`/posts/${postIndex.next.slug}/`}>Next Post</Link>)}
      </div>

    </section>

  </div>
  )
}

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: {eq: $slug}) {
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
      tags
    }
    allContentfulPost(limit: 1000, sort: { fields: [publishDate], order: DESC })  {
      edges {
        node {
          id
        }
        previous {
          slug
          title
        }
        next {
          slug
          title
        }
      }
    }
  }
`

export default PostTemplate
