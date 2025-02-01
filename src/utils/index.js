export const drawing = (drawedCard) => {
  drawedCard.forEach((element) => {
    const card = document.createElement('card-button')
    const button = document.createElement('button')
    const img = document.createElement('img')

    button.value = `${element}`
    console.log(element)
    card.classList.add(`w-24`)
  // TODO: search how to dynamically import img in astro.js using Image tag from Astro
  // but atleast just getting the img from the web itself works for now :|
  // img.src = `https://deckofcardsapi.com/static/img/${element}.png`
  // img.src = `/card/${element}.png`
    img.src = `https://deckofcardsapi.com/static/img/${element}.png`
    card.appendChild(button)
    button.appendChild(img)
    document.querySelector('div.hand-card-container').appendChild(card)
  })
}
