import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SocialLinks from '../SocialLinks'
import './Footer.scss'

const Footer = () => {

    const footerCopyright = useStaticQuery(graphql`
        query footerCopyrightQuery {
            wp {
                themeOptions {
                    themeOptions {
                        copyrightText
                    }
                }
            }
        }
    `)

    const copyrightText = footerCopyright.wp.themeOptions.themeOptions.copyrightText

    return (
        <footer id="site-footer" className="site-footer footer">
            <SocialLinks />
            <div className="container">
                <div className="row">
                    <div className="footer-copyright" dangerouslySetInnerHTML = {{__html: copyrightText}} />
                </div>
            </div>
        </footer>
    )
}
export default Footer