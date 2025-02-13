import React from "react"
import quoteList from "./quoteList";

const QuoteMachine = ({updateQuoteDetails}) => {
    const getRandomQuote = () =>{
        const newQId = Math.floor(Math.random()*quoteList.length) + 1;
        const quoteMap = new Map(quoteList.map(obj => [obj.qid, obj]));
        const quote = quoteMap.get(newQId);
        const newText = quote.text;
        const newAuthor = quote.author;
        updateQuoteDetails({text: newText, author: newAuthor, qid: newQId});
    }
    return (
        <button onClick={getRandomQuote}>Get Random Quote</button>
    )
}

export default QuoteMachine;