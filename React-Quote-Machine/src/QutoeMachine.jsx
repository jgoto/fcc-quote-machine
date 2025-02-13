import React from "react"

const quoteList = [{
    text: "The man who does not read has no advantage over the man who cannot read.",
    author: "Mark Twain",
    qid: 1
},
{
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    qid: 2
},
{
    text: "Mistakes are always forgivable, if one has the courage to admit them.",
    author: "Bruce Lee",
    qid: 3
},
{
    text: "Don’t forget to tell your favorite people that you love them.",
    author: "Shirley Temple",
    qid: 4
},
{
    text: "Never let the fear of striking out keep you from playing the game",
    author: "Babe Ruth",
    qid: 5
},
{
    text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
    qid: 6
}]

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