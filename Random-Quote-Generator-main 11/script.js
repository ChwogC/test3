const quotes = [

"Fall seven times, stand up eight.",
"The shortest distance between two points is not always a straight line.",
"Empty your cup so that it may be filled; open your hand so that you may receive.",
"The bamboo that bends in the wind survives the storm.",
"A journey of a thousand miles begins with a single step.",
"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
"He who knows others is wise; he who knows himself is enlightened.",
"The best time to plant a tree was twenty years ago. The second best time is now.",
"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The crane lives a thousand years.",
"The tortoise outlives the hare.",
"The owl sees in the dark.",
"The butterfly emerges from the chrysalis.",
"The frog in the well knows only its own well.",
"The monkey sees, the monkey does.",
"The carp leaps the dragon gate.",
"The cicada sings its song in the summer heat.",
"The spider spins its web patiently.",
"The cat that plays with a mouse will eventually catch it.",
"Love is like the moon, it waxes and wanes.",
"True love is like a fire, it needs constant tending.",
"A gentle word can turn away wrath.",
"Forgive your enemies, but never forget their names.",
"The family that prays together stays together.",
"Honor your elders.",
"Kindness is a language which the deaf can hear and the blind can see.",
"A true friend is one who knows you well and loves you anyway.",
"Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
"The journey itself is the reward.",
"A closed mouth catches no flies.",
"Look before you leap.",
"Two heads are better than one.",
"The early bird gets the worm.",
"Fortune favors the bold.",
"The squeaky wheel gets the grease.",
"Cleanliness is next to godliness.",
"Honesty is the best policy.",
"Respect your elders.",
"The mountains are the bones of the earth.",
"The river flows ever onward.",
"The cherry blossoms bloom briefly but beautifully.",
"The wind whispers secrets.",
"The moon reflects the sun's light.",
"The rain falls on the just and the unjust.",
"The ocean is vast and deep.",
"The bamboo bends but does not break.",
"The pine tree stands tall in the winter wind.",
"The willow tree bends gracefully in the breeze.",
"The mind is a monkey.",
"The only way to overcome an enemy is to make him a friend.",
"He who knows others is wise, he who knows himself is enlightened.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The journey of a thousand miles begins with a single step.",
"Where there's a will, there's a way.",
"The early bird catches the worm.",
"Two heads are better than one.",
"Look before you leap.",
"Honesty is the best policy.",
"Actions speak louder than words.",
"Treat others as you would like to be treated.",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
"Love is 1  patient, love is kind.",
"The family that prays together stays together.",
"Honor your elders.",
"Kindness is a language which the deaf can hear and the blind can see.",
"A true friend is one who knows you well and loves you anyway.",
"Forgive your enemies, but never forget their names.",
"The greatest wealth is to be content with little.",
"The mind is everything. What you think you become.",
"The only person you are destined to become is the person you decide to be.",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",  
"Love is patient, love is kind.",
"The family that prays together stays together.",
"Honor your elders.",
"Kindness is a language which the deaf can hear and the blind can see.",
"A true friend is one who knows you well and loves you anyway.",
"Forgive your enemies, but never forget their names.",
"The greatest wealth is to be content with little.",
"The mind is everything. What you think you become.",
"The only person you are destined to become is the person you decide to be.",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", 
"Love is patient, love is kind.",
"The family that prays together stays together.",
"Honor your elders.",
"Kindness is a language which the deaf can hear and the blind can see.",
"A true friend is one who knows you well and loves you anyway.",
"Forgive your enemies, but never forget their names.",
"The greatest wealth is to be content with little.",
"The mind is everything. What you think you become.",
"The only person you are destined to become is the person you decide to be.",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", 
"Love is patient, love is kind.",
"The family that prays together stays together.",
"Honor your elders.",
"Kindness is a language which the deaf can hear and the blind can see.",
"A true friend is one who knows you well and loves you anyway.",
"Forgive your enemies, but never forget their names.",
"The greatest wealth is to be content with little.",
"The mind is everything. What you think you become.",
"The only person you are destined to become is the person you decide to be."
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
  // Set canvas dimensions to 1200x675
  canvas.width = 1200;
  canvas.height = 675;

  // Draw the background image
  ctx.drawImage(quoteImage, 0, 0, canvas.width, canvas.height);

  // Extract and apply quote styles
  const quoteStyle = getComputedStyle(quoteElement);
  // Increase the font size by 2 (parse font size as a number and add 2)
  const fontSize = parseInt(quoteStyle.fontSize) + 2; 
  ctx.font = `${fontSize}px ${quoteStyle.fontFamily}`;
  ctx.fillStyle = quoteStyle.color;
  ctx.textAlign = "left"; // Align text to start from the left
  ctx.textBaseline = "middle";

  // Set maximum text width to 70% of canvas (to avoid covering the frog)
  const maxWidth = canvas.width * 0.7;
  const textX = 10; // Start 10px from the left edge
  const textY = canvas.height / 2; // Center vertically
  const lineHeight = fontSize + 10; // Adjust based on new font size

  // Measure text and calculate background dimensions
  const wrappedText = wrapTextAndMeasure(ctx, quoteElement.innerText, textX, textY, maxWidth, lineHeight);
  const textHeight = wrappedText.lines.length * lineHeight;
  const rectWidth = maxWidth + 20; // Add padding to the right
  const rectHeight = textHeight + 20; // Add padding to top and bottom
  const rectX = 0; // Background starts at the left edge
  const rectY = textY - textHeight / 2 - 10;

  // Draw the semi-transparent gray background (with more transparency)
  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
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
