import React from "react";

function RecipePost(props) {
  const {name, ingredients, instructions} = props.recipe;

  return (
    <div className="recipeDetails">
      <div>Recipe Name: {name}</div>
      <div>Ingredients: {ingredients}</div>
      <div>Cooking Instructions: {instructions}</div>
    </div>
  )
}

export default RecipePost;