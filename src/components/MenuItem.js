import React from "react"
import { CreateLocalLink } from "../utils"

const MenuItem = ({ menuItem, wordPressUrl }) => {

	function FUCK() {
		if(menuItem.childItems.nodes.length > 0) { 
			const childItems = menuItem.childItems.nodes
			const child = childItems.map((menuItem) => (
				<li>
					<a className="dropdown-item" href={CreateLocalLink(menuItem, wordPressUrl)} target={menuItem.target}>
						{menuItem.label}
					</a>
				</li>
			))
				
			return (
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{marginRight: '20px' }} href={CreateLocalLink(menuItem, wordPressUrl)} target={menuItem.target}>
						{menuItem.label}
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						{child}
					</ul>
				</li>
			)
		}
		if(!menuItem.parentId) { 
			
			return(
				<li className="nav-item">
					<a className="nav-link" style={{marginRight: '20px' }} href={CreateLocalLink(menuItem, wordPressUrl)} target={menuItem.target}>
						{menuItem.label}
					</a>
				</li>
			)
		}
	}

	return (
    	<>
			{FUCK()}
		</>
	)

}

export default MenuItem