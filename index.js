// Get emojis from https://emojipedia.org/

const btn = document.getElementById("emoji-btn");
const emojis = [
  "😍",
  "💖",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🌸",
  "🌺",
  "🌼",
  "🌻",
  "☮",
  "🌱",
  "🌎",
  "🍃",
  "🌙",
  "✨",
  "🌟",
  "💕",
];

btn.addEventListener("mouseover", () => {
  btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});
