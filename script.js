var drinkAPI = "1";
var drinkQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

$.ajax({
    url: drinkQueryUrl,
    method: "GET"
}).then(function(response){
    console.log(response);
})