let display = document.getElementById("display")
fetch('https://api.harvardartmuseums.org/object?apikey=34136ab4-3986-43f2-9e3d-dbf33f1e23c2')
  .then((response) => response.json())
  .then((data) =>{
 data.forEach(element => {
        let card1 = document.createElement("div")
        let img1 = document.createElement("img")
        img1.src = element.records.images.baseimageurl
        console.log(img1)
        // baseimageurl
 });
  });
