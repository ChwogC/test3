const quotes = [
  {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
      
  },
  // ... more quotes ... 
];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const quoteImage = document.getElementById('quote-image');

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quote').innerText = `"${randomQuote.quote}"`;
  document.getElementById('author').innerText = `- ${randomQuote.author}`;
}

function tweetQuote() {
  const quote = document.getElementById('quote').innerText;
  const author = document.getElementById('author').innerText;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " " + author)}`;
  window.open(tweetUrl, "_blank");
}

function downloadQuote() {
// 1. Draw the image onto the canvas
    ctx.drawImage(quoteImage, 0, 0, canvas.width, canvas.height);

    // 2. Draw the quote and author on the canvas
    ctx.fillStyle = 'white';
    ctx.font = '2rem "Arial", sans-serif';
    ctx.fillText(document.getElementById('quote').innerText, 50, canvas.height - 80); 
    ctx.font = '1.5rem "Arial", sans-serif';
    ctx.fillText(document.getElementById('author').innerText, 50, canvas.height - 40); 

    // 3. Create a data URL from the canvas
    const dataURL = canvas.toDataURL('image/png');

    // 4. Create a download link
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'quote.png';
    link.click();
}

// Generate a quote on page load
generateQuote();