var mealAPI = "1"

var mealQueryURL= "https://www.themealdb.com/api/json/v1/1/random.php" + mealQueryURL + "&random";


$.ajax({
    url: mealqueryURL
    method: "GET"
}).then(function(response){
console.log(response);
})



