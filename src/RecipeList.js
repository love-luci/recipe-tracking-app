import React, { useState } from "react";
import RecipeData from "./RecipeData";

function RecipeList() {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const [recipes, setRecipes] = useState(RecipeData);

  const rows = recipes.map(({ name,cuisine,photo,ingredients,preparation },index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>{photo}</td>
      <td>{ingredients}</td>
      <td>{preparation}</td>
      <td><button name="delete">Delete</button></td>
    </tr>
  ));
  //const renderRecipes = recipes.map((recipe) => {recipe.name}

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
