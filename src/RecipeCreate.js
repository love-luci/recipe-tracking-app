import React, { useState } from "react";

function RecipeCreate() {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <lable htmlFor="name">
                <input>
        
                </input>
              </lable>
            </td>
            <td>
              <lable htmlFor="cuisine">
                <input>
        
                </input>
              </lable>
            </td>
            <td>
              <lable htmlFor="photo">
                <input>
        
                </input>
              </lable>
            </td>
            <td>
              <lable htmlFor="ingredients">
                <input>
        
                </input>
              </lable>
            </td>
            <td>
              <lable htmlFor="preparation">
                <input>
        
                </input>
              </lable>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
