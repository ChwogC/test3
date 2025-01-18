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
  // Draw the background image
  ctx.drawImage(quoteImage, 0, 0, canvas.width, canvas.height);

  // Extract and apply quote styles
  const quoteStyle = getComputedStyle(quoteElement);
  ctx.font = `${quoteStyle.fontSize} ${quoteStyle.fontFamily}`;
  ctx.fillStyle = quoteStyle.color;
  ctx.textAlign = "left"; // Align text to start from the left
  ctx.textBaseline = "middle";

  // Set maximum text width to 70% of canvas (adjust for the frog image)
  const maxWidth = canvas.width * 0.7;
  const textX = 10; // Start 10px from the left edge
  const textY = canvas.height / 2; // Center vertically
  const lineHeight = 40; // Adjust based on font size

  // Measure text and calculate background dimensions
  const wrappedText = wrapTextAndMeasure(ctx, quoteElement.innerText, textX, textY, maxWidth, lineHeight);
  const textHeight = wrappedText.lines.length * lineHeight;
  const rectWidth = maxWidth + 20; // Add padding to the right
  const rectHeight = textHeight + 20; // Add padding to top and bottom
  const rectX = 0; // Background starts at the left edge
  const rectY = textY - textHeight / 2 - 10;

  // Draw the semi-transparent gray background (increase transparency)
  ctx.fillStyle = "rgba(0, 0, 0, 0.4)"; // Adjusted alpha to 0.4
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

  // Draw the text on top of the background
  ctx.fillStyle = quoteStyle.color;
  wrappedText.lines.forEach((line, index) => {
    ctx.fillText(line, textX, textY + index * lineHeight - textHeight / 2 + lineHeight / 2);
  });

  // Export the canvas as an image
  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "quote.png";
  link.click();
}

// Utility function for wrapping text and measuring
function wrapTextAndMeasure(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  const lines = [];

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const testWidth = context.measureText(testLine).width;

    if (testWidth > maxWidth && i > 0) {
      lines.push(line);
      line = words[i] + " ";
    } else {
      line = testLine;
    }
  }

  lines.push(line);

  return {
    lines,
    width: maxWidth,
    height: lines.length * lineHeight,
  };
}



// Initial quote generation
generateQuote();
