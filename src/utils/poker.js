import { $chips } from './handStores.js'

// TODO : determine Straight more dynamically
// TODO : for some reason the func cannot be called from another func
const isStraight = (card) => {
  const straight = {
    0: '0AJKQ',
    1: '09JKQ',
    2: '089JQ',
    3: '0789J',
    4: '06789',
    5: '56789',
    6: '45678',
    7: '34567',
    8: '23456',
    9: '2345A',
  }
  // get the card arr into a sorted str then compare it to the straight obj
  let str = card.map(x => x[0]).sort().join('')
  console.log(str)
  for (let i = 0; i < Object.keys(straight).length; i++) {
    if (straight[i] === str) {
      return true
    }
  }
  return false
}

// isStraight(['AC', 'KC', 'QC', 'JC', '0C'])
console.log(isStraight(['K', 'Q', 'J', '0', '9']))
// console.log(isStraight(['KD', 'QD', 'JD', '0D', '9D']))
// console.log(isStraight(['Q', 'J', '0', '9', '8']))
// console.log(isStraight(['J', '0', '9', '8', '7']))
// console.log(isStraight(['0', '9', '8', '7', '6']))
// console.log(isStraight(['9', '8', '7', '6', '5']))
// console.log(isStraight(['8', '7', '6', '5', '4']))
// console.log(isStraight(['7', '6', '5', '4', '3']))
// console.log(isStraight(['6', '5', '4', '3', '2']))
// console.log(isStraight(['5', '4', '3', '2', 'A']))
// console.log(isStraight(['A', 'A', 'Q', 'J', '0']))
// console.log(isStraight(['K', 'A', 'J', '0', 'Q']))
// console.log(isStraight(['A', 'A', 'A', '0', 'Q']))
const pokerHand = {
  'High Card': [5, 1],
  'Pair': [10, 2],
  'Two Pair': [20, 2],
  'Three of a Kind': [30, 3],
  'Straight': [30, 4], // done
  'Flush': [35, 4], // done
  'Full House': [40, 4],
  'Four of a Kind': [60, 7],
  'Straight Flush': [100, 8], // done
  'Royal Flush': [100, 8], // done
  'Five of a Kind': [120, 12], // done
  'Flush House': [140, 14], // done
  'Flush Five': [160, 16], // done
}

const determineScore = (card, pokerHand) => {

}

const whichPoker = (card) => {
  // card type is array
  // get it's value and determine which poker hand it is based on the rank and suit
  // TODO: seems like i have to count how many card were the same first before i could do anything with it
  // let rank = []
  // let suit = []
  let ranks = {}
  let suits = {}
  let obj = {}

  // TODO: make a list so we can determine if it's a straight
  let straight = ['A', 'K', 'Q', 'J', '0', '9', '8', '7', '6', '5', '4', '3', '2', 'A']
  let royal = ['A', 'K', 'Q', 'J', '0']

  // get rank and suit
  card.forEach((x) => {
    if (!obj[x]) {
      obj[x] = 1
    } else {
      obj[x]++
    }
  })
  console.log(card, obj)

  // iterate through the obj and get it's key and value
  // for (const [key, value] of Object.entries(obj)) {
  //   console.log(`${value}`)
  //   if (value === 5) {
  //     console.log('Flush Five')
  //   }
  // }
  if (Object.values(obj)[0] == 5) {
    console.log('Flush Five')
  }
  if (Object.values(obj)[0] == 3 && Object.values(obj)[1] == 2) {
    console.log('Flush House')
  }
  // console.log(Object.keys(obj))
  // console.log(Object.keys(obj)[0][0])

  // get the rank and suit
  card.forEach(x => {
    if (!ranks[x[0]]) {
      ranks[x[0]] = 1
    } else {
      ranks[x[0]]++
    }
  })
  card.forEach(x => {
    if (!suits[x[1]]) {
      suits[x[1]] = 1
    } else {
      suits[x[1]]++
    }
  })
  console.log(ranks, suits)
  if (Object.values(ranks)[0] == 5) {
    console.log('Five of a Kind')
  }
  //Flush
  if (Object.values(suits)[0] == 5) {
    console.log('Flush')
  }

  // Royal Flush
  // get index of each rank element inside card array 
  // if the rank element index is missed by one then it's not straight
  // let rFlush = card.map(x => royal.includes(x[0])).filter(x => x == true)
  let rFlush = card.every(x => royal.includes(x[0]))
  console.log(straight.indexOf('A'))
  // let aaaa = []
  // for (let i = 0; i < card.length; i++) {
  //   aaaa.push(straight.indexOf(card[i][0]))
  // }
  // console.log(aaaa)

  // Straight
  console.log(card)
  // console.log(this.isStraight(card))
  // if (this.isStraight(card) == true) {
  //   console.log('Straight')
  // }
  // card.map(x => {
  //   console.log(x, straight.indexOf(x[0]))
  // })
  // console.log(card.map(x => straight.indexOf(x[0])).reduce((acc, cur) => acc + cur, 0))
  // card.map(x => {
  //   console.log(x, straight.indexOf(x[0]))
  // })
  // console.log(card.map(x => straight.indexOf(x[0])).sort((a, b) => a - b).join(''))
  // let p
  // console.log(card.map(x => straight.indexOf(x[0])).sort().reduce((prev, cur, i) => {
  //   // if x + 1 is not equal to the next x then it's false
  //   p = prev
  //   if (p++ == cur) {
  //     prev + 1
  //   }
  //   console.log(prev, cur)
  //   // } else {
  //   //   if (prev + 1 == cur) {
  //   //     prev + 1
  //   //   } else {
  //   //     prev = -1
  //   //   }
  //   // }
  // }))
  // for (let i = 0; i < card.length; i++) {
  //   card.indexOf()
  // } 
  // if (rFlush.length == 5 && Object.values(suits)[0] == 5) {
  if (rFlush == true && Object.values(suits)[0] == 5) {
    console.log('Royal Flush')
  }
  console.log(`Royal Flush: ${rFlush}`)

  console.log(`straight: ${isStraight(card)}`)
  // straight Flush
  if (isStraight(card) == true && Object.values(suits)[0] == 5) {
    console.log('Straight FLush')
  }
  //Four of a Kind
  // the order is in the sorting ranks 
  // console.log(Object.values(ranks)[0] == 4)
  // TODO: make the rank into a str and sort it then compare
  // console.log(Object.values(ranks))
  // if (Object.values(ranks)[0] == 4) {
  //   console.log('Four of a Kind')
  // }
  let sorted = []
  for (let r in ranks) {
    // TODO: what's r, ranks[r] even means here anyway?
    sorted.push([r, ranks[r]])
  }
  let brah = sorted.sort((a, b) => a[1] - b[1])
  console.log(brah)
  console.log(brah[brah.length - 1][1])

  // Four of a Kind
  if (brah[brah.length - 1][1] == 4) {
    console.log('Four of a Kind')
  }
  // Three of a Kind
  if (brah[brah.length - 1][1] == 3) {
    console.log('Three of a Kind')
  }
}
// whichPoker(['AH', 'AS', '2H', 'AH'])
// whichPoker(['AH', 'AH', 'AH', 'AH', 'AH']) // Flush Five
// whichPoker(['7D', '4D', '7D', '4D', '7D']) // Flush House
// whichPoker(['7D', '7S', '7S', '7H', '7C']) // Flush House
// whichPoker(['AD', 'KD', 'QD', 'JD', '0D']) // Royal Flush
// whichPoker(['KD', 'JD', 'QD', '0D', 'AD']) // Royal Flush
// whichPoker(['AD', '3D', '4D', '5D', '2D']) // Straight
// whichPoker(['3D', '3D', '3D', '3D', '2D']) // Four of a Kind
whichPoker(['2D', '8D', '2D', '8D', '2D']) // Three of a Kind
// whichPoker(['2D', '8D', '2D', '8D', '3D']) // Two Pair
// whichPoker(['2D', '8D', '2D', '9D', '0D']) // Pair
// whichPoker(['2D', '8D', '3D', '9D', '0D']) // High card
