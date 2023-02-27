'use strict'

    const quoteButton = document.querySelector("quote-button");
    const quoteText = document.querySelector("quote-text");
    const quoteAuthor = document.querySelector("quote-author");

    async function getNewQuote() {
      let req = await fetch("https://stoic-server.herokuapp.com/search/searchterm");
      let processedReq = await res.json()
      
      let res = processedReq[0].data

      console.log(res)
    }

    quoteButton.addEventListener('click', getNewQuote);