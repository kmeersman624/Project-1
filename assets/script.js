var mealQueryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

//Food API call
function displayMealInfo() {
  $.ajax({
    url: mealQueryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //pull responses for img, title, ingerdients/recipe from API
    const foodImg = response.meals[0].strMealThumb;
    const foodTitle = response.meals[0].strMeal;
    const meal = response.meals[0];
    const foodInstruct = response.meals[0].strInstructions;

    const img = meal.strMealThumb;
    const $img = $("<img>").attr("src", img);
    $("foodImg").append($img);
    $("#foodTitle").append(foodTitle);
    $("#foodRecipe").append(foodInstruct);
    //For loop to get ingredient and recipe arrays
    for (let i = 1; i < 21; i++) {
      if (meal["strIngredient" + i]) {
        const ingredient = meal["strIngredient" + i];
        const measurement = meal["strMeasure" + i];

        const $p = $("<p>").text(`${ingredient}: ${measurement}`);

        $("body").append($p);
      }
    }
    // $("#food").append(foodTitle);
  });
}
//event listener for on click on index.html button
$(document).on("click", "#menuDirect", displayMealInfo);

//***************************************************** */
//Drink API call
var drinkQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
function displayDrinkInfo() {
  $.ajax({
    url: drinkQueryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //pull responses for img, title, ingerdients/recipe from API
    const drinkImg = response.drinks[0].strDrinkThumb;
    const drinkTitle = response.drinks[0].strDrink;
    const drinkIngredients = response.drinks[0];
    const drinkInstruct = response.drinks[0].strInstructions;
    // const img = meal.strMealThumb;
    const $img = $("<img>").attr("src", img);
    $("#drinkImg").append($img);
    $("#drinkTitle").append(drinkTitle);
    $("#drinkRecipe").append(drinkInstruct);
    //For loop to get ingredient and recipe arrays
    for (let i = 1; i < 21; i++) {
      if (drinkIngredients["strIngredient" + i]) {
        const ingredient = drinkRecipe["strIngredient" + i];
        const measurement = drinkRecipe["strMeasure" + i];

        const $p = $("<p>").text(`${ingredient}: ${measurement}`);

        $("#drinkRecipe").append($p);
      }
    }
  });
}
//event listener for on click on index.html button
$(document).on("click", "#menuDirect", displayDrinkInfo);

//************************************************************************ */

var movieAPI = "cac7fedb";
var movieQueryURL = "http://www.omdbapi.com/?apikey=" + movieAPI + "&t=";
// created move array ince api does not have randomizer
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
    //pull responses for img, title, plot from api
    var poster = response.Poster;
    var movieTitle = response.Title;
    var plot = response.Plot;
    //append variables to menu.html
    $("#movieImg").append(poster);
    $("#movieTitle").append(movieTitle);
    $("#plot").append(plot);
  });
}
//event listener for on click on index.html button
$("#mrnuDirect").on("click", "#menuDirect", displayMovieInfo);
