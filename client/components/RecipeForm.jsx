import React, { useState } from "react";

function RecipeForm(props) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState(''); 

  return (
    <form className="inputForm">
      <h3>Add a new recipe</h3>

      <label>Recipe Name</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />

      <label>Ingredients</label>
      <input 
        type="text" 
        onChange={(e) => setIngredients(e.target.value)} 
        value={name}
      />

      <label>Instructions</label>
      <input 
        type="text" 
        onChange={(e) => setInstructions(e.target.value)} 
        value={name}
      />
    </form>
  )
}

export default RecipeForm;