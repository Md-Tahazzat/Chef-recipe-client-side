import React from "react";

const Home = () => {
  return (
    <>
      <section className="mt-10 md:mx-20 md:mb-24 flex md:items-center justify-between flex-col-reverse md:flex-row">
        <div>
          <h1 className="text-3xl md:text-4xl text-orange-500 font-bold mb-10">
            Come Hungry <br />
            Leave Happy
          </h1>
          <p className="text-xl text-slate-600">
            Feast Your Senses - Discover a world of flavor and indulge your
            taste buds with our collection of mouth-watering recipes.
          </p>
        </div>
        <img src="https://i.ibb.co/6vFkJ7x/banner-food.png" alt="banner-food" />
      </section>
    </>
  );
};

export default Home;
