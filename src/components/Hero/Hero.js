import React from 'react'
import Img from 'gatsby-image'

const Hero = (props) => (
  <section>
    <img height={props.height} backgroundColor={'#EEEEEE'} sizes={props.image}/>
    <h1>{props.title}</h1>
  </section>
)

export default Hero
