import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";

const Home = () => {
  const chefs = useLoaderData();
  return (
    <>
      <section className="mt-10 md:mx-20 md:mb-24 flex md:items-center justify-between flex-col-reverse md:flex-row">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl text-orange-500 font-bold mb-10">
            Come Hungry <br />
            Leave Happy
          </h1>
          <p className="text-xl text-slate-600">
            Feast Your Senses - Discover a world of flavor and indulge your
            taste buds with our collection of mouth-watering recipes.
          </p>
        </div>
        <img
          className="w-full h-full"
          src="https://i.ibb.co/6vFkJ7x/banner-food.png"
          alt="banner-food"
        />
      </section>

      {/* chef section */}
      <section className="py-28 md:py-24 md:mx-24">
        <h1 className="text-center md:mb-10 text-2xl md:text-3xl font-bold text-slate-600">
          Our Best Chefs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
