console.log('Lakia Jones')

let places = [];

const printToDom = (divId, arrayToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = arrayToPrint;
};

function executeThisCodeAfterFileLoads(){
    const data = JSON.parse(this.responseText);
    // console.log('Yay!', data);
    places = data.places;
    domStringBuilder(data.places);
};

function executeThisCodeIfXHRFails(){
    console.error('WhatHappened?');
};

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    places.forEach((place) => {
        domString += `<div class="card">`;
        // domString += `<div class="card-body">`;
        domString += `<h5 class="ontop">${place.cityName}</h5>`;
        domString += `<h5 class="ontop">${place.cityState}</h5>`;
        domString += `<img src=${place.cityImage} class="cityImage">`;
        domString += `<h5 class="ontop">${place.favoriteRestaurant}</h5>`;
        domString += `<h5 class="ontop">${place.favoriteBar}</h5>`;
        domString += `<h5 class="ontop">${place.favoriteHotel}</h5>`;
        domString += `<h5 class="ontop">${place.favoriteTouristAttraction}</h5>`;
        // domString += `</div>`;
        domString += `</div>`;
    });
    console.log(arrayToPrint);
    printToDom('placesDefined', domString);
};

const getPlacesData = () => {
    const myRequest = new XMLHttpRequest ();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', 'places.json');
    myRequest.send();
    console.log(myRequest);
};


const init = () => {
    getPlacesData(places); 
};

init();