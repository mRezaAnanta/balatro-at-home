import { $chips } from './handStores.js'

// TODO: refactor every func
const isFlushFive = (obj) => {
  if (Object.values(obj)[0] == 5) {
    // console.log('Flush Five')
    return true
  }
  return false
}

const isFlushHouse = (obj) => {
  if (Object.values(obj)[0] == 3 && Object.values(obj)[1] == 2) {
    // console.log('Flush House')
    return true
  }
  return false
}

const isFiveofaKind = (ranks) => {
  if (Object.values(ranks)[0] == 5) {
    // console.log('Five of a Kind')
    return true
  }
  return false
}

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
  // console.log(str)
  for (let i = 0; i < Object.keys(straight).length; i++) {
    if (straight[i] === str) {
      return true
    }
  }
  return false
}

const isRoyalFlush = (card, suits) => {
  let royal = '0AJKQ'
  let str = card.map(x => x[0]).sort().join('')
  // console.log(royal, str)
  if (str == royal && Object.values(suits)[0] == 5) {
    // console.log('Royal Flush')
    return true
  }
  return false
}

const isStraightFlush = (card, suits) => {
  if (isStraight(card) == true && Object.values(suits)[0] == 5) {
    // console.log('Straight FLush')
    return true
  }
  return false
}

const isFourofaKind = (num) => {
  if (num == 4) {
    // console.log('Four of a Kind')
    return true
  }
  return false
}

const isFullHouse = (ranks) => {
  let r = Object.values(ranks)
  // console.log(r, r[0], r[1])
  if (r[0] == 3 && r[1] == 2 || r[0] == 2 && r[1] == 3) {
    // console.log('Full House')
    return true
  }
  return false
}

const isFlush = (suits) => {
  if (Object.values(suits)[0] == 5) {
    // console.log('Flush')
    return true
  }
  return false
}

const isThreeofaKind = (num) => {
  if (num == 3) {
    // console.log('Three of a Kind')
    return true
  }
  return false
}

const isTwoPair = (ranks) => {
  let sorted = []
  for (let r in ranks) {
    // TODO: what's r, ranks[r] even means here anyway?
    sorted.push([r, ranks[r]])
  }
  // console.log(sorted)
  let brah = sorted.sort((a, b) => a[1] - b[1])
  // console.log(brah)
  // console.log(brah[brah.length - 1][1], brah[brah.length - 2][1])
  if (brah[brah.length - 1][1] == 2 && brah[brah.length - 2][1] == 2) {
    // console.log('Two Pair')
    return true
  }
  return false
}

const isPair = (num) => {
  if (num == 2) {
    // console.log('Pair')
    return true
  }
  return false
}

const isHighCard = (num) => {
  if (num == 1) {
    // console.log('High Card')
    return true
  }
  return false
}

const pokerHand = {
  'High Card': [5, 1], // done
  'Pair': [10, 2], // done
  'Two Pair': [20, 2], // done
  'Three of a Kind': [30, 3], // done
  'Straight': [30, 4], // done
  'Flush': [35, 4], // done
  'Full House': [40, 4], // done
  'Four of a Kind': [60, 7], // done
  'Straight Flush': [100, 8], // done
  'Royal Flush': [100, 8], // done
  'Five of a Kind': [120, 12], // done
  'Flush House': [140, 14], // done
  'Flush Five': [160, 16], // done
}

const determineScore = (card, pokerHand) => {

}

export const whichPoker = (card) => {
  // card type is array
  // get it's value and determine which poker hand it is based on the rank and suit
  let ranks = {}
  let suits = {}
  let obj = {}

  // get rank and suit
  card.forEach((x) => {
    !obj[x] ? obj[x] = 1 : obj[x]++
    !ranks[x[0]] ? ranks[x[0]] = 1 : ranks[x[0]]++
    !suits[x[1]] ? suits[x[1]] = 1 : suits[x[1]]++
  })
  // console.log(card, obj, ranks, suits)

  // determine how many the ranks is
  let num = 0
  for (const [key, value] of Object.entries(ranks)) {
    if (value > num) num = value
  }
  // console.log(num)

  // which hand it is
  // console.log(`flush five: ${isFlushFive(obj)}`)
  // console.log(`flush house: ${isFlushHouse(obj)}`)
  // console.log(`five of a kind: ${isFiveofaKind(ranks)}`)
  // console.log(`royal flush: ${isRoyalFlush(card, suits)}`)
  // console.log(`straight flush: ${isStraightFlush(card, suits)}`)
  // console.log(`four of a kind: ${isFourofaKind(num)}`)
  // console.log(`full house: ${isFullHouse(ranks)}`)
  // console.log(`flush: ${isFlush(suits)}`)
  // console.log(`straight: ${isStraight(card)}`)
  // console.log(`three of a kind: ${isThreeofaKind(num)}`)
  // console.log(`two pair: ${isTwoPair(ranks)}`)
  // console.log(`pair: ${isPair(num)}`)
  // console.log(`high card: ${isHighCard(num)}`)

  // TODO: set the order of pokerhand
  if (isFlushFive(obj)) {
    return `Flush Five`
  } else if (isFlushHouse(obj)) {
    return `Flush House`
  } else if (isFiveofaKind(ranks)) {
    return `Five of a Kind`
  } else if (isRoyalFlush(card, suits)) {
    return `Royal Flush`
  } else if (isStraightFlush(card, suits)) {
    return `Straight Flush`
  } else if (isFourofaKind(num)) {
    return `Four of a Kind`
  } else if (isFullHouse(ranks)) {
    return `Full House`
  } else if (isFlush(suits)) {
    return `Flush`
  } else if (isStraight(card)) {
    return `Straight`
  } else if (isThreeofaKind(num)) {
    return `Three of a Kind`
  } else if (isTwoPair(ranks)) {
    return `Two Pair`
  } else if (isPair(num)) {
    return `Pair`
  } else if (isHighCard(num)) {
    return `High Card`
  }
}

// Test case
// whichPoker(['AH', 'AH', 'AH', 'AH', 'AH']) // Flush Five
// console.log(whichPoker(['AH', 'AH', 'AH', 'AH', 'AH'])) // Flush Five
// console.log(whichPoker(['7D', '4D', '7D', '4D', '7D'])) // Flush House
// whichPoker(['7D', '4D', '7D', '4D', '7D']) // Flush House
// console.log(whichPoker(['7D', '7S', '7S', '7H', '7C'])) // Five of a Kind
// console.log(whichPoker(['7D', '7S', '7S', '7H', '7C'])) // Five of a Kind
// whichPoker(['AD', 'KD', 'QD', 'JD', '0D']) // Royal Flush
// console.log(whichPoker(['AD', 'KD', 'QD', 'JD', '0D'])) // Royal Flush
// whichPoker(['KS', 'JS', 'QS', '0S', 'AS']) // Royal Flush
// whichPoker(['AD', '3D', '4D', '5D', '2D']) // Straight Flush
// console.log(whichPoker(['AD', '3D', '4D', '5D', '2D'])) // Straight Flush
// whichPoker(['3D', '3D', '3D', '3D', '2D']) // Four of a Kind
// whichPoker(['2D', '8D', '2D', '2D', '8D']) // Full House
// whichPoker(['8D', '8D', '2D', '2D', '8D']) // Full House
// whichPoker(['2S', '8D', 'AD', '2D', '2D']) // Three of a Kind
// whichPoker(['2D', '8D', '2D', '8D', '3D']) // Two Pair
// whichPoker(['2D', '8D', '2D', '9D', '0D']) // Pair
// whichPoker(['2D', '8D', '3D', '9D', '0D']) // High card
// console.log(whichPoker(['3D', '3D', '3D', '3D', '2D'])) // Four of a Kind
// console.log(whichPoker(['2D', '8D', '2D', '2D', '8D'])) // Full House
// console.log(whichPoker(['8D', '8D', '2D', '2D', '8D'])) // Full House
// console.log(whichPoker(['2S', '8D', 'AD', '2D', '2D'])) // Three of a Kind
// console.log(whichPoker(['2S', '8D', '2D', '8D', '3D'])) // Two Pair
// console.log(whichPoker(['2S', '8D', '2D', '9D', '0D'])) // Pair
// console.log(whichPoker(['2S', '8D', '3D', '9D', '0D'])) // High card

// module.exports = {
//   whichPoker,
// }
