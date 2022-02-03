import React from 'react'
import './Accordions.scss'

const Accordions = ({ accordionItem }) => {
	
	const { v4: uuidv4 } = require('uuid');
	const uniqueID = uuidv4()

    return (
		<div className="container">
			<div className="row">
				<div className="accordion">
					{accordionItem.map((item, i) => (
						<div key={i} id={'accordion-flush-' + uniqueID + '-' + i} className="accordion-item">
							<h2 className="accordion-header" id={'flush-heading-' + uniqueID + '-' + i}>
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse-' + uniqueID + '-' + i} aria-expanded="false" aria-controls={'flush-collapse-' + uniqueID + '-' + i}>
									{item.title}
								</button>
							</h2>
							<div id={'flush-collapse-' + uniqueID + '-' + i} className="accordion-collapse collapse" aria-labelledby={'flush-heading-' + uniqueID + '-' + i} data-bs-parent={'#accordion-flush-' + uniqueID + '-' + i}>
								<div className="accordion-body" dangerouslySetInnerHTML={{__html: item.content}} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
    )
}

export default Accordions