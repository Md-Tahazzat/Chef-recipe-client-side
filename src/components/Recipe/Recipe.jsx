import React, { useState } from "react";

const Recipe = ({ recipe }) => {
  const [showAll, setShowAll] = useState(false);
  console.log(recipe);
  const { cooking_method, ingredients, name, rating } = recipe;
  const toogleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="mb-2">
          <p className="font-bold">Ingredients:-</p>
          <ul>
            {ingredients.slice(0, 5).map((ingredient, ind) => (
              <li key={ind}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {showAll && (
          <>
            <p className="mb-2">Cooking method: {cooking_method}</p>
            <p className="mb-2">Rating: {rating}</p>
          </>
        )}
        <button onClick={toogleShowAll}>
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Recipe;
