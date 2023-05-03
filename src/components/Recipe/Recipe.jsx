import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Recipe = ({ recipe }) => {
  const [showAll, setShowAll] = useState(false);
  const [disable, setDisable] = useState(false);
  const { cooking_method, ingredients, name, rating } = recipe;
  const toogleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleDisabled = () => {
    toast.success("Recipe added to your favorite list");
    setDisable(true);
  };
  console.log("rendering");
  return (
    <div className="card card-compact my-5 md:my-0 bg-slate-100 shadow-xl">
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
        <button
          disabled={disable}
          onClick={handleDisabled}
          className={`py-1 w-full btn border-none rounded-lg text-slate-50 text-lg duration-300 ${
            disable ? "bg-red-200" : " bg-slate-400 hover:bg-slate-500"
          }`}
        >
          Favorite
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Recipe;
