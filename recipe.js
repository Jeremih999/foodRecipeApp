var form = document.getElementById('form');
var search_result = document.getElementById('search-result')
var search = document.getElementById("search-field")

// console.log(search.value)
form.addEventListener('submit', function (e) {
    e.preventDefault()

    var search_details = search.value;

    console.log(search_details)
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=salt`)
    // .then(res => res.json())
    // .then(data => console.log(data.meals[1]))
})























// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=salt`)
// .then(res => res.json())
// .then(data => console.log(data.meals[1]))