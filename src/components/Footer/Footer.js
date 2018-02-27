import React from 'react';
import Link from 'gatsby-link';
import { Grid } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => (
  <footer>
		<Grid>
      <Grid.Column floated='left' width={4}>
          <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
            <img src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" alt="Powered by Contentful" />
          </a>
      </Grid.Column>
		</Grid>
  </footer>
)

export default Footer
