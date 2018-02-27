import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import globals from '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'
import Footer from '../components/Footer';
import favicon from '../images/favicon.ico'

import { Container } from 'semantic-ui-react'

import '../../semantic/dist/semantic.min.css';

const Template = ({ children }) => {

    return (
      <div>

        <Helmet>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <link rel="icon" href={favicon} />
          <meta name="description" content={config.siteDescription}/>
          <meta property="og:title" content={config.siteTitle} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={config.siteTitle} />
          <meta property="og:url" content={config.siteUrl + config.pathPrefix}/>
        </Helmet>

        <Container text>
          {children()}
          <Footer/>
        </Container>

      </div>
    )
}

export default Template
