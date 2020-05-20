var mealAPI = "1";
var mealQueryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

$.ajax({
  url: mealQueryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

//***************************************************** */
var drinkAPI = "1";
var drinkQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function displayDrinkInfo() {
  $.ajax({
    url: drinkQueryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // var drinkImg = response.
    // var drinkTitle = response.
    // var drinkRecipe = response.
    const drinkTitle = result.meals[0];
    for(let i = 1; i < 21; i++){
      if(meal["strIngredient" + i]){
        console.log(meal["strIngredient" + i]);
        console.log(meal["strMeasure" + i]);
      }
    }
  });
}
//********************************************************************** */
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

function displayMovieInfo() {
  $.ajax({
    url: (movieQueryURL += movieChoices[randomIndex]),
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var poster = response.Poster;
    var movieTitle = response.Title;
    var plot = response.Plot;
    $("#movieImg").append(poster);
    $("#movieTitle").append(movieTitle);
    $("#plot").append(plot);
  });
}
$(document).on("click", "#generate", displayMovieInfo);
