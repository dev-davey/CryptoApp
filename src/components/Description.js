import React from 'react'
import DOMPurify from 'dompurify'
import '../css/Description.css'


export default function Description(props) {

    const formatterMessage = `<p>${props?.description}</p>`
    return (
        <div className="descriptionContainer">
            <h3>{props.coin} Description</h3>
            <div className="description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(formatterMessage)}}> 
            </div> 
        </div>
    )
}
