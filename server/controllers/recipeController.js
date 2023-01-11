const Recipe = require('../models/recipeModel.js');

const recipeController = {};

// get all recipes
recipeController.getAllRecipes = (req, res, next) => {

  Recipe.find().sort({name: 1})
  .then(recipes => {
    res.locals.recipes = recipes;
    return next();
  })
  .catch(err => next(err))
};

// create a recipe
recipeController.createRecipe = (req, res, next) => {
  const {name, ingredients, instructions} = req.body;
  Recipe.create({name, ingredients, instructions})
    .then(newRecipe => {
      res.locals.newRecipe = newRecipe;
      return next();
    })
    .catch(err => next(err));
}

// delete a recipe
recipeController.deleteRecipe = (req, res, next) => {
  const id = req.params.id;
  Recipe.findOneAndDelete({_id: id})
  .then(deleted => {
    res.locals.deleted = deleted;
    return next();
  })
  .catch(err => next(err))
}

// update a recipe
recipeController.updateRecipe = (req, res, next) => {
  const id = req.params.id;

  Recipe.findOneAndUpdate({_id: id}, {...req.body}, {upsert: true, new: true})
    .then(updatedRecipe => {
      res.locals.updatedRecipe = updatedRecipe;
      return next();
    })
    .catch(err => next(err))
}



// export recipe controller
module.exports = recipeController;

