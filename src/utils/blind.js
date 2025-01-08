// TODO: so apparently there's a base score for each ante
// for small blind = 1 * currentbasescore
// for big blind = 1.5 * currentbasescore
// for boss blind = 2 * currentbasescore
// also sometimes boss blind have another unique things for them
// like making the score bigger than the normal score for the boss
// or maybe debuffed certain cards

const blind = ["Small Bind", "Big Blind", "Boss Blind"]
const ante = {
  1: 300,
  2: 800,
  3: 2000,
  4: 5000,
  5: 11000,
  6: 20000,
  7: 35000,
  8: 50000,
}
export const winCond = (score, boss) => {
  // console.log(score, boss)
  return score >= boss
}
export const smallBlind = (basescore) => {
  return basescore * 1
}
export const bigBlind = (basescore) => {
  return basescore * 1.5
}
export const bossBlind = (basescore) => {
  return basescore * 2
}

//Blind obj
class blindObj {
  constructor(name, desc, mult, img) {
    this.name = name
    this.desc = desc
    this.mult = mult
    this.img = img
  }
  specialEffect() {
    console.log("Good day, I am now on!")
    //do stuff here
  }
}
let smallB = new blindObj('Small Blind', 'just small', 1, 'Classic Pro')
