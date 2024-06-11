import inquirer from "inquirer";
import greetHero from "./greet-hero.js";
import endAdventure from "../utils/end-adventure.js";
import generateChapterText from "../utils/generate-chapter-text.js";

async function startChapter1() {
  generateChapterText("Chapter One: A Hero Emerges");
  try {
    const isReady = await inquirer.prompt([
      {
        type: "list",
        name: "readiness",
        message: "Are you ready for an adventure? ",
        choices: ["Yes 🙋", "No 🙅", "Mayhaps 🤷"],
        default: "Yes 🙋",
      },
    ]);
    if (isReady.readiness === "Yes 🙋") {
      greetHero();
    } else endAdventure();
  } catch (error) {
    handleError(error);
  }
}

export default startChapter1;
