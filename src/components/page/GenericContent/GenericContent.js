import React from 'react'
import './GenericContent.scss'

const GenericContent = ({ content }) => {
  return (
    <section id="generic-content">
      <div dangerouslySetInnerHTML={{__html: content}} />
    </section>
  )
}

export default GenericContent
