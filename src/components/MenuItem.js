import React from "react"
import { CreateLocalLink } from "../utils"
import { Link } from "gatsby"

const MenuItem = ({ menuItem, wordPressUrl }) => {

	return (
    	<li className="nav-item">
    		<Link className="nav-link" style={{marginRight: '20px' }} to={CreateLocalLink(menuItem, wordPressUrl)}>{menuItem.label}</Link>
    	</li>
	)

}

export default MenuItem