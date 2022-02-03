import React from 'react'

const Banner = ({ title, description }) => {
  return (
    <section id="banner">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: description}} />
    </section>
  )
}

export default Banner
