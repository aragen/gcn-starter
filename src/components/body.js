import React from 'react'

const Body = (props) => {
  return (
    <div dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}/>
  )
}

export default Body
