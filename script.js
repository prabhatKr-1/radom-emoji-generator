// Accessing elements using Element selector
let btn = document.getElementById("btn");
let emojiName = document.getElementById("emoji-name");

// Creating a blank array to store the emojis
const emoji = [];

// Function to fetch the emojis
async function getEmoji() {
  //async because we are using 'await'
  // Using the API to fetch the emojis

  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=b4976b069cefa880069fa34848669226e16ac6f5"
  );
  let data = await response.json();
  console.log(data);

  // Pushing the emojis in the array
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiNames: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}
getEmoji();

// Handling click event on the button
btn.addEventListener("click", function () {
  const randomNo = Math.floor(Math.random() * emoji.length);
  btn.innerText = emoji[randomNo].emojiNames;
  emojiName.innerText = emoji[randomNo].emojiCode;
});
