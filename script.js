"use strict";
/*    JavaScript Final Exam
		Proejct 1
      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: Debbie McGee
      Date:   12/2/2022

*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");
dateBox.onchange = function() {
    let dateStr = dateBox.value;
    fetch(`https://api.nasa.gov/planetary/apod?api_key=AcfFOWBvEJTTXfkPkW3iz65T2P58Rc9fnNdkawu8&date=${dateStr}`)
        .then(res => res.json())
        .then(json => {
            showPicture(json)
        })
        .catch(err => {
            console.log(err)
        })
}

function showPicture(json) {
    if(json.media_type === "video") {
        imageBox.innerHTML = `
            <iframe src=${json.url}></iframe><h1>${json.title}</h1><p>${json.explanation}</p>
        `;
    } else if(json.media_type === "image") {
        imageBox.innerHTML = `
            <img src=${json.url}><h1>${json.title}</h1><p>${json.explanation}</p>
        `;
    } else {
        imageBox.innerHTML = "Image not Available";
    }
}

