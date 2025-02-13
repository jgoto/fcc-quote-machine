import React from "react"

const Quote = ({text, author, qid}) => {
    return (
        <div>
            <p>{text}</p>
            <p>~ {author}</p>
            <p>{qid}</p>
        </div>
    )
}

export default Quote;