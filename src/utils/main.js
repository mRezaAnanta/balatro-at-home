let deckID = ''

document.querySelector('button.drawTwo').addEventListener('click', drawTwo)
document.querySelector('button.reset').addEventListener('click', reset)

// document.querySelector('button').addEventListener('click', anothaOne)
//
// function anothaOne() {
//   let botScore = Number(localStorage.getItem('botScore'))
//   botScore = botScore + 1
//   localStorage.setItem('botScore', botScore)
// }

function reset() {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckID = data.deck_id
      document.querySelector('h6.deckID').innerText = deckID
      // if (!localStorage.getItem('deckID')) {
      localStorage.setItem('deckID', `${deckID}`)
      // }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function drawTwo() {
  const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img.card-1').src = data.cards[0].image
      document.querySelector('img.card-2').src = data.cards[1].image
      document.querySelector('h2').innerText = whoWin(data.cards[0].value, data.cards[1].value)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function whoWin(player1, player2) {
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
  let p1 = arr.indexOf(player1)
  let p2 = arr.indexOf(player2)

  console.log(p1, typeof p1, p2, typeof p2)
  return p1 == p2 ? "WAR!" : p1 > p2 ? "PLAYER 1 WON" : "PLAYER 2 WON"
}
