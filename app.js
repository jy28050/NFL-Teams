
const form = document.querySelector('form');
const date = document.querySelector('#date');
const homeTeam = document.querySelector('#hometeam');
const awayTeam = document.querySelector('#awayteam');
const homePoints = document.querySelector('#homepoints');
const awayPoints = document.querySelector('#awaypoints');
const list = document.querySelector('#list');



form.addEventListener('submit', function(e) {
    const newList = document.createElement('li'); //creates an empty li for the new values
    newList.innerHTML = `${date.value} | ${homeTeam.value} hosting ${awayTeam.value} | Final Score: ${homePoints.value} to ${awayPoints.value}`; //grabs user submissions and prints them out
    list.appendChild(newList); //add the value onto the list by appending it
    date.value = '';    //resets the inputs after a submission
    homeTeam.value = '' ;  
    awayTeam.value = '';
    homePoints.value = '';
    awayPoints.value = '';

    
}) 



