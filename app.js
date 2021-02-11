const getFoods = async(foodName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayFoods(data.meals)
    } catch (error) {
        const errorFoods = document.getElementById('error-foods');
        errorFoods.innerText = 'Sorry! Something went wrong';
    }
}
const displayFoods = food => {
    const foodsDiv = document.getElementById('foods');
    foodsDiv.innerHTML = '';
    for (i = 0; i < food.length; i++) {
        const foods = food[i];
        const foodDiv = document.createElement('div');
        foodDiv.innerHTML = `
        <div onclick="getIngredients(${foods.idMeal})">
            <img src="${foods.strMealThumb}" alt="${foods.strTags}">
            <h3>${foods.strMeal}</h3>
            <p>${foods.strArea}</p>
        </div>
        `
        foodsDiv.appendChild(foodDiv);
    }
}
document.getElementById('search-button').addEventListener('click', function() {
    const searchFood = document.getElementById('search-food').value;
    if (searchFood === '') {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
        getFoods(searchFood);
    }


})
const getIngredients = async(ingredientsID) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredientsID}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayIngredients(data.meals)
    } catch (error) {
        const errorIngredients = document.getElementById('error-ingredients');
        errorIngredients.innerText = 'Sorry!Something went wrong with the API'
    }
}
const displayIngredients = ingredient => {
    const ingredientsDiv = document.getElementById('show-ingredients');
    ingredientsDiv.innerHTML = '';
    for (i = 0; i < ingredient.length; i++) {
        const ingredients = ingredient[i]
        const newDiv = document.createElement('div');
        newDiv.className = 'styleDiv'
        newDiv.innerHTML = `
        <ul>
            <li>${ingredients.strIngredient1}</li>
            <li>${ingredients.strIngredient2}</li>
            <li>${ingredients.strIngredient3}</li>
            <li>${ingredients.strIngredient4}</li>
            <li>${ingredients.strIngredient5}</li>
            <li>${ingredients.strIngredient6}</li>
            <li>${ingredients.strIngredient7}</li>
            <li>${ingredients.strIngredient8}</li>
            <li>${ingredients.strIngredient9}</li>
            <li>${ingredients.strIngredient10}</li>
        </ul>
        <a href="${ingredients.strYoutube}">Learn How To Cook</a>
        `
        ingredientsDiv.appendChild(newDiv);
    }

}