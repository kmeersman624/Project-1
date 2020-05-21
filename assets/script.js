var mealQueryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
var entrees = ["Beef Wellington", "Beef Brisket Pot Roast", "Big Mac", "Chili prawn linguine", "Coq au vin", "Crock Pot Chicken Baked Tacos", "Chickpea Fajitas", "Duck Confit", "Fettucine alfredo", "French Onion Chicken with Roasted Carrots & Mashed Potatoes", "General Tso's Chicken", "Vegan Lasagna", "Honey Teriyaki Salmon", "Salmon Prawn Risotto", "Jerk chicken with rice & peas", "Spinach & Ricotta Cannelloni", "Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots"]
//Food API call
function displayMealInfo() {
  let randomIndex = Math.floor(Math.random() * entrees.length);
  $.ajax({
    url: (mealQueryURL + entrees[randomIndex]),
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#foodImg").empty();
    $("#foodTitle").empty();
    $("#foodRecipe").empty();
    //pull responses for img, title, ingerdients/recipe from API
    const foodImg = response.meals[0].strMealThumb;
    const foodTitle = response.meals[0].strMeal;
    const meal = response.meals[0];
    const foodInstruct = response.meals[0].strInstructions;

    const img = meal.strMealThumb;
    const $img = $("<img>").attr("src", img);
    $img.css("height","300");
    $img.css("width", "300");
    $img.css("border-radius", "100%");
    $("#foodImg").append($img);
    $("#foodTitle").append(foodTitle);
    $("#foodRecipe").append(foodInstruct);
    //For loop to get ingredient and recipe arrays
    for (let i = 1; i < 21; i++) {
      if (meal["strIngredient" + i]) {
        const ingredient = meal["strIngredient" + i];
        const measurement = meal["strMeasure" + i];

        const $p = $("<p>").text(`${ingredient}: ${measurement}`);

        $("#foodRecipe").append($p);
      }
    }
    // $("#food").append(foodTitle);
  });
}
//event listener for on click on index.html button
$("#foodDirect").on("click", displayMealInfo);

//***************************************************** */
//Drink API call
var drinkQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
function displayDrinkInfo() {
  $.ajax({
    url: drinkQueryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#drinkImg").empty();
    $("#drinkTitle").empty();
    $("#drinkRecipe").empty();
    //pull responses for img, title, ingerdients/recipe from API
    const drinkImg = response.drinks[0].strDrinkThumb;
    const drinkTitle = response.drinks[0].strDrink;
    const drinkIngredients = response.drinks[0];
    const drinkInstruct = response.drinks[0].strInstructions;
    const img = response.drinks[0].strDrinkThumb;
    const $img = $("<img>").attr("src", img);
    $img.css("height","300");
    $img.css("width", "300");
    $img.css("border-radius", "100%");
    $("#drinkImg").append($img);
    $("#drinkTitle").append(drinkTitle);
    $("#drinkRecipe").append(drinkInstruct);
    //For loop to get ingredient and recipe arrays
    for (let i = 1; i < 21; i++) {
      if (drinkIngredients["strIngredient" + i]) {
        const ingredient = drinkIngredients["strIngredient" + i];
        const measurement = drinkIngredients["strMeasure" + i];

        const $p = $("<p>").text(`${ingredient}: ${measurement}`);

        $("#drinkRecipe").append($p);
      }
    }
  });
}
//event listener for on click on index.html button
$("#drinkDirect").on("click", displayDrinkInfo);

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
  "50 First Dates",
  "Date Night",
  "The Money Pit",
  "25th Hour",
  "Never Been Kissed",
  "50/50",
  "Friends with Benefits",
  "No Strings Attached",
  "Bridesmaids",
  "Dawn of the Dead",
  "True Lies",
  "October Sky",
  "Sleeping with the Enemy",
  "Pirates of the Carribean",
  "Parasite",
  "Inception",
  "The Mummy"
];

function displayMovieInfo() {
  let randomIndex = Math.floor(Math.random() * movieChoices.length);
  $.ajax({
    url: (movieQueryURL + movieChoices[randomIndex]),
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#movieImg").empty();
    //pull responses for img, title, plot from api
    var img = response.Poster;
    var movieTitle = response.Title;
    var plot = response.Plot;
    var actors = response.Actors;
    var director = response.Director;
    var released = response.Released;
    var rated = response.Rated;
    //append variables to menu.html
    const $img = $("<img>").attr("src", img);
    $img.css("height","300");
    $img.css("width", "300");
    $img.css("border-radius", "100%");
    $("#movieImg").append($img);
    $("#movieTitle").text(movieTitle);
    $("#plot").text(plot);
    $("#actors").text("Actors: " + actors);
    $("#director").text("Director: " + director);
    $("#released").text("Released Date: " + released);
    $("#rated").text("Rated: " + rated);
    })
};
//event listener for on click on index.html button
$("#movieDirect").on("click", displayMovieInfo);
