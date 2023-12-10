const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomChoice() {
  const choices = ["gunting", "batu", "kertas"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

console.log("permainan gunting batu kertas");

readline.question("pilihan pemain: ", result => {
  const playerChoice = result;
  const computerChoice = randomChoice();
  console.log("Pilihan computer: " + computerChoice);

  if (playerChoice == "gunting" && computerChoice == "kertas") {
    console.log("pemain menang!");
  } else if (playerChoice == "batu" && computerChoice == "gunting") {
    console.log("pemain menang!");
  } else if (playerChoice == "kertas" && computerChoice == "batu") {
    console.log("pemain menang!");
  } else if (playerChoice == computerChoice) {
    console.log("seimbang");
  } else {
    console.log("komputer menang!");
  }
});
