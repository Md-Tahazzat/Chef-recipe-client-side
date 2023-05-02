import React from "react";

const Chef = ({ chef }) => {
  const {
    id,
    img,
    likes,
    name,
    num_recipes,
    recipes,
    bio,
    years_of_experience,
  } = chef;
  return (
    <div className="card bg-slate-100 shadow-xl mt-14 md:mt-0 border rounded-lg md:mx-0">
      <img className="h-72 rounded-lg" src={img} alt="chef-img" />

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience: {years_of_experience} years</p>
        <p>Recipes: {num_recipes}</p>
        <p>Likes: {likes}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default Chef;
