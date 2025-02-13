import React from "react"

const quoteList = [{
    text: "The man who does not read has no advantage over the man who cannot read.",
    author: "Mark Twain",
    qid: "01"
},
{
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    qid: "02"
}]

const QuoteMachine = ({updateQuoteDetails}) => {
    const getRandomQuote = () =>{
        const newText = "The only limit to our realization of tomorrow will be our doubts of today."
        const newAuthor = "Franklin D. Roosevelt";
        const newQId = "02";
        updateQuoteDetails({text: newText, author: newAuthor, qid: newQId});
    }
    return (
        <button onClick={getRandomQuote}>Get Random Quote</button>
    )
}

export default QuoteMachine;