let generateButton = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteDiv = document.querySelector(".quote-display");
let quoteId = document.querySelector(".quote-id");
let autoStatus = document.querySelector(".auto-status span");
let author = document.querySelector(".author-display");
let intervalId ;

generateButton.onclick = generateQuote ;
autoBtn.onclick = startAutoPlay ;
stopBtn.onclick = stopAutoPlay ;
window.onload = generateQuote ;

async function getQuotes() {
  let response = await fetch("quotes.json");
  let data = await response.json();
  return data;
}


async function generateQuote() {
  let quotes = await getQuotes();
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDiv.innerHTML = quote.text;
  quoteId.innerHTML = quote.id;
  author.innerHTML = quote.author;
}

function startAutoPlay() {
  intervalId = setInterval(generateQuote, 3000);
  autoStatus.innerHTML = " ON";
}

function stopAutoPlay() {
  clearInterval(intervalId);
  autoStatus.innerHTML = " OFF"
}