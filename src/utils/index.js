export const drawing = (drawedCard) => {
  drawedCard.forEach((element) => {
    const card = document.createElement('card-button')
    const button = document.createElement('button')
    const img = document.createElement('img')

    button.value = `${element}`
    card.classList.add(`w-24`)
    img.src = `/cards/${element}.png`
    // img.src = `https://deckofcardsapi.com/static/img/${element}.png` // if the assets is not working
    card.appendChild(button)
    button.appendChild(img)
    document.querySelector('div.hand-card-container').appendChild(card)
  })
}
