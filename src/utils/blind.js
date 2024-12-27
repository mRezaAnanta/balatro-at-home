// TODO: so apparently there's a base score for each ante
// for small blind = 1 * currentbasescore
// for big blind = 1.5 * currentbasescore
// for boss blind = 2 * currentbasescore
// also sometimes boss blind have another unique things for them
// like making the score bigger than the normal score for the boss
// or maybe debuffed certain cards

const blind = ["Small Bind", "Big Blind", ""]
const ante = {
  1: [300, 600, 900],
  2: [300, 600, 900]
}
export const winCond = (score, boss) => {
  console.log(score, boss)
  return score >= boss
}
