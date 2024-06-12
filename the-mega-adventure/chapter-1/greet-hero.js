import inquirer from "inquirer";
import endAdventure from "../utils/end-adventure.js";

async function greetHero() {
  const heroNameInput = await getHeroName();
  if (isValidName(heroNameInput)) {
    console.log(
      "Tally-ho, " + heroNameInput + " – a sensational name! Heroic indeed..."
    );
  } else {
    endAdventure("❌ No, " + heroNameInput + " is not a hero's name...");
  }
}

// -------------Edit this----------------
// TODO: Hmm, something seems wrong with our input validation... 🤔
// Valid name: is actually a word
// Doesn't have numbers in, maybe 🤷
// Should probably allow spaces
function isValidName(nameInput) {
  return false;
}
// --------------------------–-----------

async function getHeroName() {
  const input = await inquirer.prompt([
    { name: "heroNameInput", message: "What-ho! 👋 What's your name, friend?" },
  ]);
  return input.heroNameInput;
}

export default greetHero;
