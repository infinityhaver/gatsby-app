import React from 'react'
import './HomeHero.scss'

const HomeHero = ({ backgroundImage, heading, headingTag, heroContent, overlay, paddingBottom, paddingTop, textAlign, textColor, xPosition, yPosition }) => {
    const heroBG = backgroundImage.sourceUrl
    const heroOverlay = overlay
    const heroPaddingTop = paddingTop
    const heroPaddingBottom = paddingBottom
    const heroTextAlign = 'acf-' + textAlign
    const herotextColor = 'acf-' + textColor
    const acfClasses = heroTextAlign + ' ' + herotextColor
    const heroX = xPosition
    const heroY = yPosition

    function heroHeading() {
      const heroHeading = `<${headingTag} className="${acfClasses}">${heading}</${headingTag}>`
      
      return(
        <div className="home-hero-heading" dangerouslySetInnerHTML={{__html: heroHeading}} />
      )
    }

    return (
      <div className="container">
        <div className="row">
          <div id="home-hero" className={acfClasses} style={{ background: `linear-gradient(${heroOverlay}, ${heroOverlay}), url(${heroBG}), ${heroX} ${heroY}`, paddingTop: `${heroPaddingTop}px`, paddingBottom: `${heroPaddingBottom}px` }}>
            <div className="inner">
              {heroHeading()}
              <div className="hero-content" dangerouslySetInnerHTML={{__html: heroContent}} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomeHero