const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController.js')


// get all recipes and display them on screen
router.get('/', recipeController.getAllRecipes, (req, res) => {
  res.status(200).json(res.locals.recipes);
});

// create a new recipe
router.post('/', recipeController.createRecipe, (req, res) => {
  res.status(200).json(res.locals.newRecipe);
});

// delete a recipe
router.delete('/:id', recipeController.deleteRecipe, (req, res) => {
  res.status(200).json(res.locals.deleted);
});

// edit/update a recipe
router.patch('/:id',recipeController.updateRecipe, (req, res) => {
  res.status(200).json(res.locals.updatedRecipe);
});


module.exports = router;