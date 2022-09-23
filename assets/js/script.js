//data source for CountQueuingStrategy, city and state: (https://github.com/dr5hn/countries-states-cities-database);
// npm i country-state-city

// import csc from 'country-state-city';

// import { Country, State, City }  from 'country-state-city';
// console.log(Country.getAllCountries())
// console.log(State.getAllStates())

// // Import Interfaces`
// import { ICountry, IState, ICity } from 'country-state-city'

// Variables
var inputAddress = $("#inputAddress");
var inputCity = $("#inputCity");
var inputState = $("#inputState");
var mapBtn = $("#mapBtn");
var tableContainer = $(".table-container");
var states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
var fullAddress = "";
var APIKey = "AIzaSyCzN1vyP42X-Ral2rxZkmH0knZhGOyoEGo";

getStates();

function getStates() {
  for (i = 0; i < states.length; i++) {
    var state = document.createElement("option");
    state.innerHTML = states[i];
    inputState.append(state);
  }
}

mapBtn.click(getAddress);
function getAddress(event) {
  event.preventDefault();
  var address = inputAddress.val();
  var city = inputCity.val();
  var state = inputState.val();

  fullAddress = address + ", " + city + ", " + state;
  console.log(fullAddress);

  // Clear form values after saving them to fullAddress variable
  inputAddress.val("");
  inputCity.val("");
  inputState.val("Choose...");
  APIKey;
}

const crimes = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46d9ba4524msh1bfc5bf71bc0638p1f849fjsnb2b8ad21547f',
		'X-RapidAPI-Host': 'jgentes-Crime-Data-v1.p.rapidapi.com'
	}
};

fetch('https://jgentes-crime-data-v1.p.rapidapi.com/crime?startdate=9%2F19%2F2020&enddate=9%2F25%2F202025&long=-122.5076392&lat=37.757815', crimes)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//recent searches
function history() {
    var lastAreaSearched = getAddress(fullAddress)
    localStorage.getItem(lastAreaSearched)
    lastAreaSearched.push(history)
    localStorage.setItem("fullAddress", lastAreaSearched)
}

history();
console.log(history)

//crime data api code

function table()  {
    for (crime in crimes) {
       var crime = JSON.parse('crimes')
       var tableContainer = documen.getElementById ('table-container')
       localStorage.getItem('tableContainer', crimes)
       tableContainer.push('.table-container')
       localStorage.setItem('tableContainer', tableContainer)
       console.log(typeof crime)
}}
