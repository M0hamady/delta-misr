import React from "react";
import { Link } from "react-router-dom";

export default function CardCardWtihTitleAndDesc() {
  return (
    <div
      className="flex flex-wrap  items-center mt-20  text-left "
      style={{ marginBottom: "100px" }}
    >
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-6">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          <i class="fas fa-car text-xl"></i>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          TIRE section
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Welcome to tire section, wWhere empolyee looking for your relaxition
          and your saftey.
        </p>
        <p className="text-md  font-bold leading-relaxed mt-1 mb-4 text-blueGray-600">
          We are not just paying you a tire, We are creating family car care .
        </p>
        <Link
          to="/shop"
          className=" bg-lightBlue-400 shadow p-2 rounded   font-bold text-blueGray-100 mt-8"
        >
          shop
        </Link>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
          <img
            alt="..."
            src={require("assets/img/tire.png").default}
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block h-95-px -top-94-px"
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-lightBlue-500 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">Tire section</h4>
            <p className="text-md font-light mt-2 text-white">
              Nowdays offer is up to{" "}
              <span className="text-white-500 text-xl  font-bold">50%</span>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
