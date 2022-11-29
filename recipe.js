var form = document.getElementById('form');
var search_result = document.getElementById('search-result')
var search = document.getElementById("search-field")
var img_box = document.getElementById('img-box')
var ingredients_list = document.getElementById('sub-head')
var Instructions  = document.getElementById('sub-head-1')
var container = document.getElementById("container")
var meal_details = document.getElementById('meal-details')
var wishlist = document.getElementById('wishlist')

// console.log(search.value)
form.addEventListener('submit', function (e) {
    e.preventDefault()

    var search_details = search.value;

    // console.log(search_details)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_details}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)

        if (data.meals === null) {
            document.getElementById('heading-text').innerText= "Your search result not found";
        } else {
            data.meals.map((cur)=>{

                var a = document.createElement("a")
                   a.setAttribute('href', '#meal-details')
                
                var img_box = document.createElement('div')

                img_box.className = 'img-box';
                var img = document.createElement("img");
                img.setAttribute("src", cur.strMealThumb)

                img.setAttribute("alt", cur.strMeal)

                img_box.appendChild(img);

                var details = document.createElement("div");
                details.className = "details";

                var h1 = document.createElement("h1")

                var h1TextNode = document.createTextNode(cur.strMeal)
                h1.appendChild(h1TextNode)

                var h3 = document.createElement("h3")

                var h3TextNode = document.createTextNode(cur.strCategory)
                h1.appendChild(h3TextNode)

                details.prepend(h1);
                details.appendChild(h3)

                var search = document.createElement("div");
                search.className = "search-result";
                search.id = cur.idMeal

                search.prepend(img_box)
                search.appendChild(details)
                a.appendChild(search)
                search_result.prepend(a)
                container.style.visibility = "visible"
                meal_details.style.visibility = "hidden"
                wishlist.style.visibility = "hidden"

            //     var meal = `<a href="#meal-details">
            //     <div class="search-result">

            //         <div class="img-box">
            //             <img src="${cur.strMealThumb}" alt="${cur.strMeal}">
            //         </div>
            //         <div class="details">
            //             <h1>${cur.strMeal}</h1>
            //             <h3>${cur.strCategory}</h3>
            //         </div>
                    
            //     </div>
            // </a>`

            // search_result.appendChild(meal);
            // var newMealTemp = HTML.replace('%cur.strMealThumb%', cur.strMealThumb);

            // newMealTemp=html.replace('%cur.strMeal%', cur.strMeal);

            // newMealTemp= html.replace("%cur.strCategory%", cur.strCategory)

            // //   search_result.innerHTML = meal;

            // search_result.insertAdjacentElement("beforeend", newMealTemp);
                // console.log(cur)
                // console.log(a)
            })
            // console.log(data.meals)
            // console.log(data)
        }
        
    })

    search.value = ""
})


// var  single_food = document.querySelectorAll('#single-food')
// console.log(single_food)



search_result.addEventListener("click", function (e) {
    e.preventDefault();
        console.log(e.target)
        // console.log("it worked for now")

    if (e.target.classList.contains("search-result")) {
        // console.log(e.target.id)

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.target.id}`)
    .then(res => res.json())
    .then(data =>{
      const meal = data.meals[0];

        console.log(data)
        pushed(meal)
        meal_details.style.visibility = "visible"

        // console.log(data.strIngredient[1])
    })


    }
    
})


function pushed(data) {
    const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            if (data[`strIngredient${i}`]) {
            ingredients.push(
                `${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`
            );
            } else {
            break;
            }

        }

         img_box.innerHTML =    `<img src="${data.strMealThumb}" alt="${data.strMeal}"> 
                                   <h1>${data.strMeal}</h1> `;

         ingredients_list.innerHTML = `<ul>
                                     ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                                  </ul>`
         
         Instructions.innerHTML = `<li>${data.strInstructions}</li>`
        return ingredients
}
















// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=salt`)
// .then(res => res.json())
// .then(data => console.log(data.meals[1]))