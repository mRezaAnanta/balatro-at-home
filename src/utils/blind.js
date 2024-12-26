// TODO: make object for each ante as their key and the value of array of each blind score
const blind = ["Small Bind", "Big Blind", "Boss Blind"]
const ante = {
  1: [300, 600, 900],
  2: [300, 600, 900]
}

export const winCond = (score, boss) => {
  console.log(score, boss)
  return score >= boss
}
