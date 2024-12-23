import { atom } from 'nanostores'
let url = ''
//
// // let response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
// // let data = await response.json()
// await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     // console.log(data)
//     url = data.deck_id
//     // console.log(url)
//     // alert(url)
//   })
//   .catch(err => {
//     console.log(`error ${err}`)
//   });
// // console.log(url)

// export const deckID = atom(url)
export const deckID = atom('')

// export const deckID = atom(data.deck_id)
