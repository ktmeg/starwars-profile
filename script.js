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
      ewokPic.classList.add("br-100", "h4", "w4", "dib", "ba", "b--black-05", "pa2", "center")
      dataSection.appendChild(ewokPic)

      const h1El = document.createElement('h1')
      h1El.innerText = starwarsData.name
      h1El.classList.add("f3", "mb2", "tc")
      dataSection.appendChild(h1El)
    
      const h2El = document.createElement('h2')
      h2El.innerText =`Designation: ${starwarsData.designation}`
      h2El.classList.add('f5', 'fw4', 'gray', 'mt0', 'tc')
      dataSection.appendChild(h2El)  

      const pEl = document.createElement('p')
      pEl.innerText = `Classification: ${starwarsData.classification}`
      pEl.classList.add('f5', 'fw4', 'gray', 'mt0', 'tc')
      dataSection.appendChild(pEl)

      const pEl2 = document.createElement('p')
      pEl2.innerText = `Language: ${starwarsData.language}`
      pEl2.classList.add('f5', 'fw4', 'gray', 'mt0', 'tc')
      dataSection.appendChild(pEl2)

      const pEl3 = document.createElement('p')
      pEl3.innerText = `Average Height: ${starwarsData.average_height} cm`
      pEl3.classList.add('f5', 'fw4', 'gray', 'mt0', 'tc')
      dataSection.appendChild(pEl3)

      const pEl4 = document.createElement('p')
      pEl4.innerText = `Skin color: ${starwarsData.skin_colors}`
      pEl4.classList.add('f5', 'fw4', 'gray', 'mt0', 'tc')
      dataSection.appendChild(pEl4)

      const pEl5 = document.createElement('p')
      pEl5.innerText = `Hair color: ${starwarsData.hair_colors}`
      pEl5.classList.add('f5', 'fw4', 'gray', 'mt0', 'tc')
      dataSection.appendChild(pEl5)

      const pEl6 = document.createElement('p')
      pEl6.innerText = `Eye color: ${starwarsData.skin_colors}`
      pEl6.classList.add('f5', 'fw4', 'gray', 'mt0', 'tc')
      dataSection.appendChild(pEl6)



    }
  })
