var mealAPI = "1"

var mealQueryURL= "https://www.themealdb.com/api/json/v1/1/random.php" + mealQueryURL + "&random";


$.ajax({
    url: mealqueryURL,
    method: "GET"
}).then(function(response){
console.log(response);
})

var drinkAPI = "1";
var drinkQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

$.ajax({
    url: drinkQueryUrl,
    method: "GET"
}).then(function(response){
    console.log(response);
})

var movieAPI = "cac7fedb";
var movieQueryURL = "http://www.omdbapi.com/?apikey=" + movieAPI + "&t=";
console.log(movieQueryURL);
// var posterQueryURL = http://img.omdbapi.com/?apikey=[yourkey]&
var movieChoices = [
  "Pulp Fiction",
  "A Knight's Tale",
  "Independence Day",
  "Interstellar",
  "The Princess Bride",
  "Superbad",
  "Star Wars: Episode V - The Empire Strikes Back",
  "Silver Linings Playbook",
  "Almost Famous",
  "The Wrong Missy",
  "Date Night",
];

let randomIndex = Math.floor(Math.random() * movieChoices.length);

$.ajax({
  url: (movieQueryURL += movieChoices[randomIndex]),
  method: "GET",
}).then(function (response) {
  console.log(response);
});
