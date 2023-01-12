import React, { useState } from "react";

function RecipeForm() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState(''); 
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    // e.preventDefault(); // prevents reload of page when submit button is clicked
    const recipe = {name, ingredients, instructions};

    console.log(recipe);
    console.log('handleSubmit fired');

    fetch('/recipe', {
      method: 'POST',
      headers: {
        accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
    .then(data = data.json())
    .then(recipe => {
      console.log('New recipe add', recipe);
      setName('');
      setIngredients('');
      setInstructions('');
      setError(undefined);
    })
    .catch(err => setError(err));
  }

  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <h3>Add a new recipe</h3>

      <label>Recipe Name</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />

      <label>Ingredients</label>
       <textarea onChange={(e) => setIngredients(e.target.value)} value={ingredients}>
       </textarea>
      {/* <input 
        type="text" 
        onChange={(e) => setIngredients(e.target.value)} 
        value={ingredients}
      /> */}

      <label>Instructions</label>
      <textarea onChange={(e) => setInstructions(e.target.value)} value={instructions}>
       </textarea>
      {/* <input 
        type="text" 
        onChange={(e) => setInstructions(e.target.value)} 
        value={instructions}
      /> */}

      <button>Add Recipe</button>
      {error && <div>{error}</div>}
    </form>
  )
}

export default RecipeForm;