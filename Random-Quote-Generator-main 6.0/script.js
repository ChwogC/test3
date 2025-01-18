const quotes = [
  "The Way Get Started Is To Quit Talking And Begin Doing.",
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
  "Don’t Let Yesterday Take Up Too Much Of Today.",
  "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
  "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "Strive not to be a success, but rather to be of value.",
  "I attribute my success to this: I never gave or took any excuse.",
  "I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed.",
  "Every strike brings me closer to the next home run.",
  "Life is what happens to you while you’re busy making other plans.",
  "We become what we think about.",
  "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
  "Life is 10% what happens to me and 90% of how I react to it.",
  "The mind is everything. What you think you become.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Eighty percent of success is showing up.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Winning isn’t everything, but wanting to win is.",
  "I am not a product of my circumstances. I am a product of my decisions. ",
  "You can never cross the ocean until you have the courage to lose sight of the shore.",
  "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ",
  "Either you run the day, or the day runs you.",
  "Whether you think you can or you think you can’t, you’re right.",
  "The best revenge is massive success.",
  "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
  "There is only one way to avoid criticism: do nothing, say nothing, and be nothing",
  "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
  "The only person you are destined to become is the person you decide to be.",
  "Go confidently in the direction of your dreams.  Live the life you have imagined.",
  "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
  "Few things can help an individual more than to place responsibility on him, and to let him know you trust him."
];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const quoteImage = document.getElementById('quote-image');
const quoteElement = document.getElementById('quote');

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = `"${randomQuote}"`; 
}

function tweetQuote() {
  const quote = quoteElement.innerText;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
  window.open(tweetUrl, "_blank");
}

function downloadQuote() {
  ctx.drawImage(quoteImage, 0, 0, canvas.width, canvas.height);

  const quoteStyle = getComputedStyle(quoteElement);
  ctx.font = quoteStyle.font;
  ctx.fillStyle = quoteStyle.color;
  ctx.shadowColor = quoteStyle.textShadow;

  const text = quoteElement.innerText;
  const textWidth = ctx.measureText(text).width;
  const x = canvas.width - textWidth - 50; // Adjust for right alignment
  const y = 100; 

  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Semi-transparent black
  ctx.fillRect(x - 10, y - 10, textWidth + 20, quoteStyle.fontSize * 1.5); 

  ctx.fillText(text, x, y);

  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'quote.png';
  link.click();
}

generateQuote();