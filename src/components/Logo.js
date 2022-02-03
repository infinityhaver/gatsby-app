import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Logo = () => {

    const siteSettings = useStaticQuery(graphql`
        query siteSettingsQuery {
            wp {
                themeOptions {
                    themeOptions {
                        logo {
                            id
                            sourceUrl
                        }
                    }
                }
            }
        }
    `)

    const siteLogo = siteSettings.wp.themeOptions.themeOptions.logo.sourceUrl

    return (
        <>
            <img src={siteLogo} className="img-fluid" />
        </>
    )
}
export default Logo