import { $chips } from './handStores.js'

const pokerHand = {
  'High Card': [5, 1],
  'Pair': [10, 2],
  'Two Pair': [20, 2],
  'Three of a Kind': [30, 3],
  'Straight': [30, 4],
  'Flush': [35, 4],
  'Full House': [40, 4],
  'Four of a Kind': [60, 7],
  'Straight Flush': [100, 8],
  'Royal Flush': [100, 8],
  'Five of a Kind': [120, 12],
  'Flush House': [140, 14],
  'Flush Five': [160, 16],
}

const determineScore = (card, pokerHand) => {

}

const whichPoker = (card) => {
  // card type is array
  // get it's value and determine which poker hand it is based on the rank and suit
  // TODO: seems like i have to count how many card were the same first before i could do anything with it
  let rank = []
  let suit = []
  let ranks = {}
  let suits = {}
  let obj = {}

  // // get rank and suit
  // card.map(x => {
  //   rank.push(x[0])
  //   suit.push(x[1])
  // })
  // console.log(rank, suit)
  //
  // // ranks obj with how many elements inside of the rank array
  // // rank array has two Aces and one Jack
  // // ex: {A: 2, J: 1}
  // rank.forEach((x) => {
  //   if (!ranks[x]) {
  //     ranks[x] = 1
  //   } else {
  //     ranks[x]++
  //   }
  // })
  //
  // // ranks obj with how many elements inside of the rank array
  // // rank array has two Hearts and one Spade
  // // ex: {H: 2, S: 1}
  // suit.forEach((x) => {
  //   if (!suits[x]) {
  //     suits[x] = 1
  //   } else {
  //     suits[x]++
  //   }
  // })
  //
  // console.log(ranks, suits)

  card.forEach((x) => {
    if (!obj[x]) {
      obj[x] = 1
    } else {
      obj[x]++
    }
  })
  console.log(card, obj)

  // iterate through the obj and get it's key and value
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${value}`)
  }

  // based on how many card that is the same
  // calculate which poker hand it is
}
whichPoker(['AH', 'AS', '2H', 'AH'])
