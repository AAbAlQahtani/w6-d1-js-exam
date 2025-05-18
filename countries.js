let display = document.getElementById("display")
fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) =>{
    data.forEach(element => {
        let divcard = document.createElement("div")
        divcard.classList.add("container")
         let flags = document.createElement("img")
       flags.src= element.flags.png
       flags.style.maxWidth= "35vh"
        flags.style.height= "25vh"
       divcard.appendChild(flags)

       let commonName = document.createElement("h1")
       commonName.innerText = element.name.common
    //    console.log(commonName)   
    //    console.log(element.name.common)

       divcard.appendChild(commonName)
       let officialName = document.createElement("h4")
       officialName.innerText = element.name.official     
       divcard.appendChild(officialName)
       let population = document.createElement("p")
       population.innerText= `The population number is ${element.population}`
       divcard.appendChild(population)
       
       region = document.createElement("p")
       region.innerText= `In ${element.region}` 
       divcard.appendChild(region)
       languages = document.createElement("p")
       languages.innerText = element.languages.eng
    divcard.appendChild(languages)

       maps =  document.createElement("p")
       maps.innerText = `Google map link: ${ element.maps.googleMaps}` 
        divcard.appendChild(maps)
        console.log(divcard)
       display.appendChild(divcard)
       
       console.log(display)
    //    console.log(maps)

    });
  });