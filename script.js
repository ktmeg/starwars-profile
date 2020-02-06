let starwarsData

const dataSection = document.querySelector('#starwars-data')

fetch('https://swapi.co/api/species/9/')
  .then(response => response.json())
  .then(function (data) {
    starwarsData = data
    renderData()
    console.log(data)

    function renderData () {
      let keys = Object.keys(starwarsData)
      console.log(keys)

      const ewokPic = document.createElement('img')
      ewokPic.src = 'https://vignette.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png/revision/latest?cb=20130622101905'
      ewokPic.classList.add("br-100", "h4", "w4", "dib", "ba", "b--black-05", "pa2")
      dataSection.appendChild(ewokPic)

      const h1El = document.createElement('h1')
      h1El.innerText = starwarsData.name
      h1El.classList.add("f3", "mb2")
      dataSection.appendChild(h1El)
    
      const h2El = document.createElement('h2')
      h2El.innerText = starwarsData.designation
      h2El.classList.add('f5', 'fw4', 'gray', 'mt0')
      dataSection.appendChild(h2El)  

      const pEl = document.createElement('p')
      pEl.innerText = starwarsData.classification
      pEl.classList.add('f5', 'fw4', 'gray', 'mt0')
      dataSection.appendChild(pEl)

      const pEl2 = document.createElement('p')
      pEl2.innerText = starwarsData.language
      pEl2.classList.add('f5', 'fw4', 'gray', 'mt0')
      dataSection.appendChild(pEl2)

      const pEl3 = document.createElement('p')
      pEl3.innerText = starwarsData.averageHeight
      pEl3.classList.add('f5', 'fw4', 'gray', 'mt0')
      dataSection.appendChild(pEl3)

    }
  })
