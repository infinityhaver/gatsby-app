import React from 'react'
import fontawesome from '@fortawesome/fontawesome';
import faSolid from '@fortawesome/fontawesome-free-solid';
import faBrands from '@fortawesome/fontawesome-free-brands';
import '@fortawesome/fontawesome/styles.css';
import './SocialLinks.scss'
import { useStaticQuery, graphql } from 'gatsby'

const SocialLinks = () => {

    const query = useStaticQuery(graphql`
        query socialLinksQuery {
            wp {
                themeOptions {
                    themeOptions {
                        socialLinks {
                            icon
                            link
                            newTab
                        }
                    }
                }
            }
        }
    `)

    return (
        <ul className="social-menu">
            {query.wp.themeOptions.themeOptions.socialLinks.map((socialLink, i) => (
                <li key={i}>
                    <a dangerouslySetInnerHTML={{__html: socialLink.icon}} href={socialLink.link} target={socialLink.newTab ? ' _blank' : '_self'}>
                    </a>
                </li>
            ))}
        </ul>
    )

}
export default SocialLinks