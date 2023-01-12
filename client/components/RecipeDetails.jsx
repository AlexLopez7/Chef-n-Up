import React from "react";

function RecipePost(props) {
  const {name, ingredients, instructions} = props.recipe;
  const id = props.recipe._id

  function handleDelete() {
    fetch('/recipe/' + id, {
      method: 'DELETE',
    })
    .then(data => data.json())
    .then(deleted => console.log('Recipe deleted', deleted))
    .catch(err => console.log(err))
  }

  return (
    <div className="recipeDetails">
      <div>Recipe Name: {name}</div>
      <div>Ingredients: {ingredients}</div>
      <div>Cooking Instructions: {instructions}</div>
      
      <button onClick={handleDelete}>Delete recipe</button>
    </div>
  )
}

export default RecipePost;