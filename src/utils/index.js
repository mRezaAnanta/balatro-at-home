export const drawing = (drawedCard) => {
  drawedCard.forEach((element) => {
    const img = document.createElement('img')
    const btn = document.createElement('button')
  
    // TODO: search how to dynamically import img in astro.js using Image tag from Astro
    // but atleast just getting the img from the web itself works for now :|
    img.src = `https://deckofcardsapi.com/static/img/${element}.png`
    // img.src = `/card/${element}.png`
    img.classList.add(`w-24`)
    btn.value = `${element}`
    btn.classList.add(`card`)
    // FIX: get the onclick attribute to work
    btn.setAttribute('onclick', 'cardSelected(this)')
  
    btn.appendChild(img)
    document.querySelector('div.hand-card-container').appendChild(btn)
  })

}

export const cardSelected = (btn) => {
  alert(btn.value)
}
