//- Iterate through an array of objects (defeat some ne'er-do-wells)

function freeTheVillage(attacker, hero) {
  console.log("\nOh no! We're under attack – can anyone save us?!\n\n");

  const attackerStat = attacker.health * attacker.defence;

  hero.attack *= 15.0001;

  return hero.attack > attackerStat;

  //✅ check the health and defence stats of the attacker
  //✅ if the hero's attack power is greater than the attacker's defense, return true, otherwise return false
  //✅ if necessary, increase the hero's attack power (let's imagine it's as the result of a rousing speech)
}

export default freeTheVillage;
