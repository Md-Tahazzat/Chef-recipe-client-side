import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Chef from "../Chef/Chef";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../loading/Loading";

const Home = () => {
  const chefs = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading></Loading>;

  const handleFeedBack = (e) => {
    e.preventDefault();
    toast.success("Thank you so much for your concern");
    e.target.reset();
  };
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

      <section className="py-28 md:py-24 md:mx-24">
        <h1 className="text-center pb-10 text-2xl md:text-3xl font-bold text-slate-600">
          New Arrivals
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card  bg-base-100 shadow-xl ">
            <figure>
              <img
                src="https://i.ibb.co/0C9mF8X/Classic-Cheeseburger.png"
                alt="food-new-arrival"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Classic-Cheeseburger</h2>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl ">
            <figure>
              <img
                src="https://i.ibb.co/LQbzbGF/Southern-Fried-Chicken.png"
                alt="food-new-arrival"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Southern-Fried-Chicken</h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl ">
            <figure>
              <img
                src="https://i.ibb.co/wWWKfBt/Philly-Cheesesteak.png"
                alt="food-new-arrival"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Philly-Cheesesteak</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-24 md:mx-24">
        <h1 className="text-center mb-14 text-2xl md:text-3xl font-bold text-slate-600">
          We need your feedback
        </h1>
        <div className="flex w-full justify-between">
          <img
            className="w-full hidden md:block"
            src="https://i.ibb.co/XSq3r6D/feedback.png"
            alt="feedback"
          />
          <form
            onSubmit={handleFeedBack}
            className="rounded-lg shadow-lg bg-slate-50 px-5 py-1  md:border lg:border w-full lg:border-slate-200 lg:shadow-lg"
          >
            <div className="input-box pt-5">
              <label htmlFor="text">Email</label>
              <input
                className="input-style focus:border-blue-400"
                autoComplete="off"
                type="email"
                required
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="input-box mt-[-15px]">
              <label htmlFor="password">Message</label>
              <textarea
                className="input-style focus:border-blue-400"
                autoComplete="off"
                type="password"
                required
                name="password"
              ></textarea>
            </div>

            <div className="pt-1 pb-5">
              <input
                type="submit"
                className="hover:bg-yellow-600 mt-5 inline-block rounded bg-yellow-500 py-1 px-3 text-white md:mr-10 lg:mr-10  lg:text-2xl"
                value="Send"
              />
            </div>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Home;
