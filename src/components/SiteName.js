import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
const SiteName = () => {
    const site = useStaticQuery(graphql`
        query SiteTitleQuery {
            wp {
                generalSettings {
                    title
                }
            }
        }
    `)

    const siteName = site.wp.generalSettings.title
        return (
            <>
                {siteName}
            </>
        )
    }
    export default SiteName