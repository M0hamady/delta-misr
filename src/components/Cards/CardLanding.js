import React from "react";
import { Link } from "react-router-dom";

export default function CardLanding() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px text-left">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              Delta Misr
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              A tire is a
              ring-shaped component that surrounds a wheel's rim to transfer a
              vehicle's load from the axle through the wheel to the ground and
              to provide traction on the surface over which the wheel travels.
              {"\n "}
              <Link
               to={"/shop"}
                className="text-blueGray-600"
              >
                Delta Misr{"\n "}
              </Link>
              Keeps itself with you where ever you are
            </p>
            <div className="mt-12">
              <Link
                to="/shop"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Shop
              </Link>
              <Link
                to="/landing"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                // target="_blank"
              >
                Info
              </Link>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-0 b-auto right-0 pt-20 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
        src={require("assets/img/cars-03.png").default}
        alt="..."
      />
    </section>
  );
}
