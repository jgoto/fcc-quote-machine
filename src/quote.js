const quoteText = document.getElementById("text");
const quoteSource = document.getElementById("source");
const quoteAuthor = document.getElementById("author");
const output = document.getElementById("container-output");
const quoteList = [];
/*quoteList.push(
    {id: 1,
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        source: "Undelivered Address April 13, 1945"
    });
*/
function generateQuoteId(){
    const hexId = Math.random().toString(16).substring(2,12);
    console.log(hexId)
    return hexId;
}

const saveBtn = document.getElementById("save-btn");
const exportBtn = document.getElementById("export-btn");
saveBtn.addEventListener("click", ()=>{
    quoteList.push({
        id: generateQuoteId(),
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

function deleteQuote(id){
    const quoteDiv = document.getElementById(`${id}-div`);
    console.log("click");
    quoteDiv.innerText="";
    output.removeChild(quoteDiv);
}

function displayQuote(quote){
    const {id, text, author, source} = quote;
    const quoteDiv = document.createElement("div");
    quoteDiv.classList.add("quote");
    quoteDiv.id=`${id}-div`;
    const pId = document.createElement("p");
    pId.innerText = id;
    const pText = document.createElement("p");
    pText.innerText = text;
    const pAuthor = document.createElement("p");
    pAuthor.innerText = author;
    const pSource = document.createElement("p");
    pSource.innerText = source;
    const delBtn = document.createElement("button");
    delBtn.classList.add("delete-btn");
    delBtn.type="button";
    delBtn.innerText="Delete";
    delBtn.addEventListener("click", () => deleteQuote(id));
    quoteDiv.appendChild(pId);
    quoteDiv.appendChild(pText);
    quoteDiv.appendChild(pAuthor);
    quoteDiv.appendChild(pSource);
    quoteDiv.appendChild(delBtn);
    output.appendChild(quoteDiv);
}

function loadQuoteList(){
    try {
        const quoteStr = localStorage.getItem("quotes");
        if(!quoteStr)
            console.log("Quote data not found");
        else{
            return JSON.parse(quoteStr);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayQuoteList(){
    const quoteJson = loadQuoteList();
    if(!quoteJson)
    {
        console.log("No quotes saved");
    }
    else
    {
        quoteJson.forEach((quote) => {
            quoteList.push({
                id: quoteList.length+1,
                text: quote.text,
                author: quote.author,
                source: quote.source
            });
            displayQuote(quote);
        });
    }
}

displayQuoteList();

function saveQuotes(){
    localStorage.setItem("quotes", JSON.stringify(quoteList));
}