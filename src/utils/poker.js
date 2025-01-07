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

  // TODO: make a list so we can determine if it's a straight
  let straight = ['A', 'K', 'Q', 'J', '0', '9', '8', '7', '6', '5', '4', '3', '2', 'A']
  let royal = ['A', 'K', 'Q', 'J', '0']

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
  card.map(x => {
    console.log(x, straight.indexOf(x[0]))
  })
  console.log(card.map(x => straight.indexOf(x[0])).sort((a, b) => a - b).join(''))
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
  console.log(rFlush)

}
// whichPoker(['AH', 'AS', '2H', 'AH'])
// whichPoker(['AH', 'AH', 'AH', 'AH', 'AH']) // Flush Five
// whichPoker(['7D', '4D', '7D', '4D', '7D']) // Flush House
// whichPoker(['7D', '7S', '7S', '7H', '7C']) // Flush House
// whichPoker(['AD', 'KD', 'QD', 'JD', '0D']) // Royal Flush
// whichPoker(['KD', 'JD', 'QD', '0D', 'AD']) // Royal Flush
// whichPoker(['AD', '3D', '4D', '5D', '2D']) // Straight


// let straight = ['A', 'K', 'Q', 'J', '0', '9', '8', '7', '6', '5', '4', '3', '2', 'A']
// console.log(straight.sort())

// TODO : determine Straight more dynamically
// TODO : for some reason the func cannot be called from another func
const isStraight = (card) => {
  const straight = {
    // 0: ['A', 'K', 'Q', 'J', '0'],
    // 1: ['K', 'Q', 'J', '0', '9'],
    // 2: ['Q', 'J', '0', '9', '8'],
    // 3: ['J', '0', '9', '8', '7'],
    // 4: ['0', '9', '8', '7', '6'],
    // 5: ['9', '8', '7', '6', '5'],
    // 6: ['8', '7', '6', '5', '4'],
    // 7: ['7', '6', '5', '4', '3'],
    // 8: ['6', '5', '4', '3', '2'],
    // 9: ['5', '4', '3', '2', 'A'],
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
  let c = card.map(x => x[0]).sort().join('')
  // console.log(straight[9].sort().join(''))
  // console.log(c)
  // console.log(straight[0].sort().join(''), card.sort().join(''))
  return straight[0] === c ? true :
    straight[1].sort().join('') === card.sort().join('') ? true :
      straight[2].sort().join('') === card.sort().join('') ? true :
        straight[3].sort().join('') === card.sort().join('') ? true :
          straight[4].sort().join('') === card.sort().join('') ? true :
            straight[5].sort().join('') === card.sort().join('') ? true :
              straight[6].sort().join('') === card.sort().join('') ? true :
                straight[7].sort().join('') === card.sort().join('') ? true :
                  straight[8].sort().join('') === card.sort().join('') ? true :
                    straight[9].sort().join('') === card.sort().join('') ? true : false
  // return straight[0].sort().join('') === c.sort().join('') ? true :
  //   straight[1].sort().join('') === c.sort().join('') ? true :
  //     straight[2].sort().join('') === c.sort().join('') ? true :
  //       straight[3].sort().join('') === c.sort().join('') ? true :
  //         straight[4].sort().join('') === c.sort().join('') ? true :
  //           straight[5].sort().join('') === c.sort().join('') ? true :
  //             straight[6].sort().join('') === c.sort().join('') ? true :
  //               straight[7].sort().join('') === c.sort().join('') ? true :
  //                 straight[8].sort().join('') === c.sort().join('') ? true :
  //                   straight[9].sort().join('') === c.sort().join('') ? true : false
}

console.log(isStraight(['AC', 'KC', 'QC', 'JC', '0C']))
// console.log(isStraight(['K', 'Q', 'J', '0', '9']))
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
