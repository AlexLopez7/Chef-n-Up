import React from "react";
import { useEffect, useState } from "react";

// import components
import RecipePost from "./RecipeDetails.jsx";
import RecipeForm from "./RecipeForm.jsx";

function Home() {

  const [recipes, setRecipes] = useState(null);
  
  useEffect(() => {
    // request recipe data from our server
    fetch('/recipe')
      .then(data => data.json())
      .then(recipes => {
        setRecipes(recipes);
      })
      .catch(err => console.log(err));
  }, []);

  const recipeArr = [];
  if (recipes) {
    for (const recipe of recipes) {
      recipeArr.push(<RecipePost recipe={recipe} key={recipe._id}/>);
    }
  }
  
  return (
    <div className="homePage">
      <RecipeForm />
      <h1>Recipe List</h1>
      <div id='recipes'>{recipeArr}</div>
    </div>
  )
}

export default Home;