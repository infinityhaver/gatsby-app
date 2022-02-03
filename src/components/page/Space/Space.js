import React from 'react'
import './Space.scss'

const Space = ({ backgroundColor, fullWidth, height }) => {
    const spaceBackgroundColor = backgroundColor
    const spaceHeight = height
    function Space() {
        if(fullWidth) {
            return (
                
                <div className="space" style={{ background: `${spaceBackgroundColor}`, height: `${spaceHeight}px` }}></div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="space" style={{ background: `${spaceBackgroundColor}`, height: `${spaceHeight}px` }}></div>
                    </div>
                </div>
            )
        }
    }
    return (
        <>
            {Space()}
        </>
    )

}

export default Space