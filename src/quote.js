const quoteText = "The only limit to our realization of tomorrow will be our doubts of today.";
const quoteSource = "Undelivered Address April 13, 1945";
const quoteAuthor = "Franklin D. Roosevelt";
const output = document.getElementById("container-output");
const quoteList = [];
quoteList.push(
    {id: 1,
        text: quoteText,
        author: quoteAuthor,
        source: quoteSource
    });

function displayQuote(quote){
    const {id, text, author, source} = quote;
    const quoteDiv = document.createElement("div");
    quoteDiv.classList.add("quote");
    const pId = document.createElement("p");
    pId.innerText = id;
    const pText = document.createElement("p");
    pText.innerText = text;
    const pAuthor = document.createElement("p");
    pAuthor.innerText = author;
    const pSource = document.createElement("p");
    pSource.innerText = source;
    quoteDiv.appendChild(pId);
    quoteDiv.appendChild(pText);
    quoteDiv.appendChild(pAuthor);
    quoteDiv.appendChild(pSource);
    output.appendChild(quoteDiv);
}

displayQuote(quoteList[0]);

function saveQuotes(){
    localStorage.setItem("quotes", JSON.stringify(quoteList));
}

saveQuotes();