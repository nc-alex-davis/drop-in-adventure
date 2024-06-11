import startChapter1 from "./the-mega-adventure/chapter-1/start-chapter-1.js";

function goForthToAdventure() {
  startChapter1();
}

goForthToAdventure();

const availableEquipment = [
  "pin",
  "leaf",
  "breadstick",
  "sword",
  "carrot",
  "the diary of a long lost lover",
  "ornate swimming cap",
  "the keys to a Ford Sierra that hasn't run since 1992.",
  "boomerang",
];
const beastlyAttacker = {
  alias: "Keta",
  health: 20,
  attack: 55,
  defence: 15,
  strongAgainst: ["conker", "sword", "water cannon"],
  weakAgainst: ["fire", "Magnum ice-cream", "boomerang"],
};
const adventureTitle =
  "The Adventure – a learning journey, and all the friends made along the way";

function ventureForthHero() {
  console.log(
    `
    🌞 Greetings, and welcome to our experience: 
    ${adventureTitle} 🧙`
  );

  console.log("\n\tchapter 1 – identify a hero\n");
  // greetHero(ourHero);
  /*
    create an ourHero string
    do stuff in greetHero
    log the greeting to the console
  */

  console.log("\n\tchapter 2 – give hero sufficient storage\n");
  // createHeroObject(ourHero);
  /*
    do stuff in createHeroObject
    make a hero variable from the object
    console log the object to check it's all cool
  */

  console.log("\n\tchapter 3 – equip hero so it's safe to go alone\n");
  // equipHero(availableEquipment, hero);
  /*
    do stuff in equipHero
    console.log the hero object to check they've been equipped
    console.log a little note of thanks to the wizened crone, and do a fresh stock take for them
  */

  console.log("\n\tchapter 4 – free the village\n");
  let isVillageSafe = false;
  // isVillageSafe = freeTheVillage(beastlyAttacker, hero);

  console.log("\n\tconclusion:");
  if (isVillageSafe) {
    console.log(
      `\n\t✅ Conglaturation, ${hero.alias}. All your base are belong to us! 🎉\n\tGame over! 👋`
    );
  } else {
    console.log(
      "\n\t💀 Everyone perished. 3/10 – would not recommend... 💀\n\t"
    );
  }
}
