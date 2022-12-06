import React from "react";
import { Link } from "react-router-dom";
import CardOverViewAndImg from "./CardOverViewHistory";

export default function CardOverViewAndItenDescription() {
  return (
    <section className="mt-40 md:mt-40 pb-0 text-left relative bg-blueGray-100 justify-left" style={{marginBottom:"120px",marginTop:"300px"}}>
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto text-left">
        <div
          className="flex flex-wrap items-center"
          style={{  }}
        >
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <img
                alt="..."
                src={require("assets/img/battary.png").default}
                className="w-full align-middle rounded-t-lg bg-white "
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
                <h4 className="text-xl font-bold text-white">
                  Battary section
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  Nowdays offer  up to <span className="text-xl font-bold">30%</span>
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
              {/** section types of battaries just 2 */}
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-truck-monster"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Batt tip</h6>
                    <p className="mb-4 text-blueGray-500">
                      Description comes with a huge number of Fully Coded CSS
                      components.
                    </p>
                  </div>
                </div>
                
              </div>
              <div className="w-full md:w-6/12 px-4">
              {/** section types of battaries just 2 */}

                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-truck-monster"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">batt type</h6>
                    <p className="mb-4 text-blueGray-500">
                      This extension also comes with 3 sample pages. They are
                      fully coded so you can start working instantly.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
