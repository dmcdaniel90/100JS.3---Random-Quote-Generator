'use strict'

const quoteButton = document.querySelector('.quote-button');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
let quotesReceived = false;


async function newQuoteRequest() {
   try {
      let req = await fetch('https://stoicquotesapi.com/v1/api/quotes', {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          }
      });
      let processedReq = await req.json();
      
      let x = Math.floor(Math.random() * 10)
      let res = processedReq.data[x];
      
      quoteText.textContent = res.body
      quoteAuthor.textContent = res.author
      
   } catch (err) {
      err = "Error"
      console.log(err);
   }
}


quoteButton.addEventListener('click', newQuoteRequest)