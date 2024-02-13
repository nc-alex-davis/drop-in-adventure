//- Access an item in an array if you know its index (create an equipment belt on our protagonist)

function equipHero(equipment, hero) {
  if (equipment.length === 0) {
    console.log("dang, nothing here");
    return;
  }

  for (let i = 0; i < equipment.length; i++) {
    if (equipment[i] === "sword") {
      let swordStatement = "There's a sword!";
      swordStatement += ` It's at index ${i}!`;
      console.log(swordStatement);
    }
  }

  hero.equipment = equipment.splice(3, 1);

  return equipment;

  //✅ check whether available equipment has anything in it
  //✅ console.log the available equipment
  //✅ console.log whether or not there's a sword
  //✅ if there is a sword, add its index to the console log
  //✅ add an equipment property to the hero
  //✅ equip the hero with the sword
  //✅ return the array without the sword in it
}

export default equipHero;
