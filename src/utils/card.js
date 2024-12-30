//card logic
export const count = (cardArr, jokerArr = []) => {
  //get the value for each element inside of arr
  //split it to two to get the value (Ace, Jack or just it's number) and it's type (heart, spades etc)
  //maybe split it to more if i want to store other properties into it (like if it's a foil, or other unique things that balatro had for the cards)
  const val = {
    'A': 11,
    'K': 10,
    'Q': 10,
    'J': 10,
    '0': 10,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  }

  console.log(cardArr.map(x => val[x[0]]).reduce((prev, cur) => prev + cur))
  return cardArr.map(x => val[x[0]]).reduce((prev, cur) => prev + cur)
}
//
// count(['1H', '2S', 'AD'])
//
// class cardObj {
//   constructor(value, img) {
//     this.value = value
//     this.img = img
//   }
// }
//
// const 2H = new cardObj('2H', '../assets/cards/2H.png')
// TODO: maybe just make a random card drawing func
// and then make the playcard comp and discard comp get the asset by using template literal

export const baseDeck = [
  '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '0C', 'JC', 'QC', 'KC', 'AC',
  '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '0D', 'JD', 'QD', 'KD', 'AD',
  '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '0H', 'JH', 'QH', 'KH', 'AH',
  '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '0S', 'JS', 'QS', 'KS', 'AS',
]

export const drawCard = (deck, num) => {
  // TODO: loop deck based on num
  // get the value at random and remove it from initial arr
  // return the new arr with drawed card
  // return the previous arr with drawed card deleted
  let drawed = []
  let i = 0
  while (i < num) {
    drawed.push(deck[Math.floor(Math.random() * (deck.length - 0) + 0)])
    deck = deck.filter(x => x !== drawed[drawed.length - 1])
    i++
  }
  console.log(drawed, num, deck, deck.length)
  return {
    drawedCard: drawed,
    deck: deck
  }
}
// drawCard(baseDeck, 8)
