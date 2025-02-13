import { useState } from 'react'
import './App.css'
import Quote from './Quote'
import QuoteMachine from './QutoeMachine'

function App() {

  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [qid, setQId] = useState("");

  const updateQuoteDetails = (updatedQuote) =>{
    if(updatedQuote.text !== undefined)
      setText(updatedQuote.text);
    if(updatedQuote.author !== undefined)
      setAuthor(updatedQuote.author)
    if(updatedQuote.qid !== undefined)
      setQId(updatedQuote.qid);
  }
  
  return (
    <div>
        <h1>
          Basic React App
        </h1>
        <QuoteMachine updateQuoteDetails={updateQuoteDetails} />
        <Quote text={text} author={author} qid={qid}/>
    </div>
  )
}

export default App
