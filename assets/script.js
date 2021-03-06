//local storage for saving date night choices to screen
var dateNightData = localStorage.getItem("dateNightData");

if (dateNightData) {
  dateNightData = JSON.parse(dateNightData);
} else {
  dateNightData = {};
}
//saves data from each category
if (dateNightData.meal) {
  displayMealInfo(dateNightData.meal);
}
if (dateNightData.drink) {
  displayDrinkInfo(dateNightData.drink);
}
if (dateNightData.movie) {
  displayMovieInfo(dateNightData.movie);
}
//food section url and array of menu options
var mealQueryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
var entrees = [
  "Beef Wellington",
  "Beef Brisket Pot Roast",
  "Big Mac",
  "Chili prawn linguine",
  "Coq au vin",
  "Crock Pot Chicken Baked Tacos",
  "Chickpea Fajitas",
  "Duck Confit",
  "Fettucine alfredo",
  "French Onion Chicken with Roasted Carrots & Mashed Potatoes",
  "General Tso's Chicken",
  "Vegan Lasagna",
  "Honey Teriyaki Salmon",
  "Salmon Prawn Risotto",
  "Jerk chicken with rice & peas",
  "Spinach & Ricotta Cannelloni",
  "Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots",
];
//Movie section url and array of movie options
var movieAPI = "cac7fedb";
var movieQueryURL = "https://www.omdbapi.com/?apikey=" + movieAPI + "&t=";
// created move array since api does not have randomizer
var movieChoices = [
  "Pulp Fiction",
  "A Knight's Tale",
  "Independence Day",
  "Interstellar",
  "The Princess Bride",
  "Superbad",
  "Star Wars: Episode V - The Empire Strikes Back",
  "Silver Linings Playbook",
  "Rush Hour 2",
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
  "The Mummy",
];

//event listener for on click on index.html button
$("#foodDirect").on("click", function () {
  let randomIndex = Math.floor(Math.random() * entrees.length);
  var query = mealQueryURL + entrees[randomIndex];
  dateNightData.meal = query;
  displayMealInfo(query);
});
//event listener for on click on index.html button
$("#drinkDirect").on("click", function () {
  displayDrinkInfo();
});
//event listener for on click on index.html button
$("#movieDirect").on("click", function () {
  let randomIndex = Math.floor(Math.random() * movieChoices.length);
  var query = movieQueryURL + movieChoices[randomIndex];
  dateNightData.movie = query;
  displayMovieInfo(query);
});

//Food API call
function displayMealInfo(query) {
  $.ajax({
    url: query,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //clears populated food items when button is pushed
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
    //changed sizes and styling of thumbnail from APIs
    $img.css("height", "300");
    $img.css("width", "300");
    $img.css("border-radius", "100%");
    //append food info onto page
    $("#foodImg").append($img);
    $("#foodTitle").append(foodTitle);
    $("#foodRecipe").append(foodInstruct);
    $("#foodRecipe").css("overflow", "scroll");
    $("#foodRecipe").css("height", "250");
    $("#foodRecipe").css("width", "300");
    const $ingredientDiv = $("<p>");
    $ingredientDiv.append("INGREDIENTS: " + "<br>");
    //For loop to get ingredient and recipe arrays
    for (let i = 1; i < 21; i++) {
      if (meal["strIngredient" + i]) {
        const ingredient = meal["strIngredient" + i];
        const measurement = meal["strMeasure" + i];

        if (measurement === "") {
          measurement = "to taste";
          $ingredientDiv.append(`${ingredient}: ${measurement}, \n`);
        } else {
          $ingredientDiv.append(`${ingredient}: ${measurement}, \n`);
        }
        $("#foodRecipe").append($ingredientDiv);
      }
    }
  });
}

function displayDrinkInfo(query) {
  var drinkQueryUrl;
  //Display saved drink info if user saved or generate new if nothing saved
  if (query) {
    drinkQueryUrl = query;
  } else {
    drinkQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  }
  //Drink API call
  $.ajax({
    url: drinkQueryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    dateNightData.drink =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
      response.drinks[0].idDrink;
    //clears populated drink items when button is pushed
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
    //changed sizes and styling of thumbnail from APIs
    $img.css("height", "300");
    $img.css("width", "300");
    $img.css("border-radius", "100%");
    //append drink info onto page
    $("#drinkImg").append($img);
    $("#drinkTitle").append(drinkTitle);
    $("#drinkRecipe").append(drinkInstruct);
    $("#drinkRecipe").css("overflow", "scroll");
    $("#drinkRecipe").css("height", "250");
    $("#drinkRecipe").css("width", "300");
    //For loop to get ingredient and recipe arrays
    for (let i = 1; i < 21; i++) {
      if (drinkIngredients["strIngredient" + i]) {
        const ingredient = drinkIngredients["strIngredient" + i];
        const measurement = drinkIngredients["strMeasure" + i];
        //line up ingredient to cooresponding measurment
        const $p = $("<p>").text(`${ingredient}: ${measurement}`);

        $("#drinkRecipe").append($p);
      }
    }
  });
}

function displayMovieInfo(query) {
  //call to get movie info from api
  $.ajax({
    url: query,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //clears populated movie items when button is pushed
    $("#movieImg").empty();
    //pull responses for img, title, plot from api
    var img = response.Poster;
    var movieTitle = response.Title;
    var plot = response.Plot;
    var actors = response.Actors;
    var director = response.Director;
    var released = response.Released;
    var rated = response.Rated;
    const $img = $("<img>").attr("src", img);
    //changed sizes and styling of thumbnail from APIs
    $img.css("height", "300");
    $img.css("width", "300");
    $img.css("border-radius", "100%");
    //append movie info onto page
    $("#movieImg").append($img);
    $("#movieTitle").text(movieTitle);
    $("#plot").text(plot);
    $("#actors").text("Actors: " + actors);
    $("#director").text("Director: " + director);
    $("#released").text("Released Date: " + released);
    $("#rated").text("Rated: " + rated);
    $("#movieBox").css("overflow", "scroll");
    $("#movieBox").css("height", "250");
    $("#movieBox").css("width", "300");
  });
}
//Save all date night popluated data to local storage for user to reference in future
$("#menuDirect").on("click", function () {
  localStorage.setItem("dateNightData", JSON.stringify(dateNightData));
});