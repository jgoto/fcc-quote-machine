const quoteText = document.getElementById("text");
const quoteSource = document.getElementById("source");
const quoteAuthor = document.getElementById("author");
const output = document.getElementById("container-output");
const quoteList = [];
quoteList.push(
    {id: 1,
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        source: "Undelivered Address April 13, 1945"
    });

const saveBtn = document.getElementById("save-btn");
const exportBtn = document.getElementById("export-btn");
saveBtn.addEventListener("click", ()=>{
    quoteList.push({
        id: quoteList.length+1,
        text: quoteText.value,
        author: quoteAuthor.value,
        source: quoteSource.value
    });
    quoteText.value="";
    quoteAuthor.value="";
    quoteSource.value="";
    displayQuote(quoteList[quoteList.length-1]);
});
exportBtn.addEventListener("click", saveQuotes);

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