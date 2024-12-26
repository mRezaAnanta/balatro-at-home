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

  // cardArr.map(x => {
  //   // console.log(x.split(''))
  //   // console.log(x[0], x[1])
  //   // console.log(x[0] in val)
  //   // console.log(val.x[0])
  //   // console.log(Object.values(val))
  //   console.log(val[x[0]])
  // })
  //
  console.log(cardArr.map(x => val[x[0]]).reduce((prev, cur) => prev + cur))
  return cardArr.map(x => val[x[0]]).reduce((prev, cur) => prev + cur)
}

count(['1H', '2S', 'AD'])
