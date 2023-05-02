import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import Loading from "../loading/Loading";

const Recipes = () => {
  const chefDetails = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading></Loading>;
  const {
    id,
    img,
    likes,
    name,
    num_recipes,
    recipes,
    bio,
    years_of_experience,
  } = chefDetails;
  return (
    <div>
      <section>
        <div className="card border card-side mt-10 w-full md:w-4/6 mx-auto bg-slate-100 shadow-xl">
          <figure
            className="w-3/6 rounded
        "
          >
            <img className="w-6/6 h-72 rounded-lg" src={img} alt="chef" />
          </figure>
          <div className="card-body text-slate-600 w-3/6">
            <h2 className="card-title">{name}</h2>
            <p className="mb-2">{bio}</p>
            <div className="flex items-center">
              <p className="font-bold">Likes: {likes}</p>
              <p className="font-bold">Experience: {years_of_experience}</p>
              <p className="font-bold">Recipes: {num_recipes}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h1 className="text-center mb-14 text-2xl md:text-3xl font-bold text-slate-600">
          Available Recepies Today
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mb-20">
          {recipes.map((recipe, ind) => (
            <Recipe key={ind} recipe={recipe}></Recipe>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recipes;
