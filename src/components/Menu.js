import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Logo from './Logo'
import SiteName from './SiteName'
import MenuItem from './MenuItem'

/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`

    fragment MenuItem on WPGraphQL_MenuItem {
        id
        label
        url
        title
        target
    }

    query GETMAINMENU {
        wpgraphql {
            menuItems(where: {location: PRIMARY}) {
                nodes {
                    ...MenuItem
                    childItems {
                        nodes {
                            ...MenuItem
                            childItems {
                                nodes {
                                    ...MenuItem
                                }
                            }
                        }
                    }
                }
            }
            generalSettings {
                url
            }
        }
    }
`

const Menu = () => {
  return (
    <StaticQuery
      query={MENU_QUERY}
      render={(data) => {
        if (data.wpgraphql.menuItems) {
          const menuItems = data.wpgraphql.menuItems.nodes
          const wordPressUrl = data.wpgraphql.generalSettings.url

          return (
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><SiteName /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 right">
                                    {
                                        menuItems &&
                                        menuItems.map((menuItem) => (
                                            <MenuItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
          )
        }
        return null
      }}
    />
  )
}

export default Menu