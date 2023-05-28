//obtaining event handler and event target;
const quotes = document.querySelectorAll('div p');
const button = document.querySelector('button');

// creating an event handler function
function quote() {
    // hide all quotes
    quotes.forEach(q => {
        q.style.display = 'none';
    });

    //randomise the quotes;
    const randomQuote = Math.floor(Math.random() * quotes.length);

    // display a quote at random;
    quotes[randomQuote].style.display = 'block';
}

button.onclick = quote;