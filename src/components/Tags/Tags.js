import React from 'react'

const Tags = (props) => {
  return (
    <ul>
      {props.items.map((tags, index ) => (
        <li key={index}>
          {tags}
        </li>
      ))}
    </ul>
  )
}

export default Tags
