import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'semantic-ui-react'

const Footer = () => (
  <footer>
  	<Container >
		<ul>
		  <li><a href="https://www.contentful.com/" rel="nofollow" target="_blank"><img src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" alt="Powered by Contentful" /></a></li>
		  <li><a href="https://github.com/ryanwiemer/gatsby-starter-gcn" target="_blank">gatsby-starter-gcn</a> by <a href="https://github.com/ryanwiemer" target="_blank">@ryanwiemer</a></li>
		</ul>
    </Container>
  </footer>
)

export default Footer
