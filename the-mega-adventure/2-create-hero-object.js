// - Access a value of an object if you know its key (turn hero into an object)

function createHeroObject(heroName) {
  const heroObject = {};

  heroObject.alias = heroName;
  heroObject.health = 5;
  heroObject.attack = 2;
  heroObject.defence = 2;

  return heroObject;

  //✅ create a hero object
  //✅ add an alias property with the value of heroName
  //✅ add a health property to it
  //✅ add properties for attack and defence
  //✅ return the object
}

export default createHeroObject;
