import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Link,useParams } from "react-router-dom";
import { Oreder_detail } from "data/DatatOrders";
import { is_order_ready } from "data/DatatOrders";
// import { emerald } from "tailwindcss/colors";

export default function Order({ order_num, price, locat, date, component }) {
    const id = useParams().id
    const order = Oreder_detail(id)
    console.log(order.component.length);
    component=order.component
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "150px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative  bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
              <div className="px-2 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/team-2-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4  lg:order-3 lg:text-right lg:self-center">
                    <div className="py-0 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full  lg:w-4/12 px-4 lg:order-1" style={{maxWidth:"400px"}}>
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-x w100 font-bold block uppercase tracking-wide text-blueGray-600">
                          تاريخ الطلب
                        </span>
                        <span
                          className=" text-blueGray bold-400 w100"
                          style={{ fontSize: "12px" }}
                        >
                        {order ? order.date: date? date :'no date'}
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-x w100 font-bold block uppercase tracking-wide text-blueGray-600 ">
                          عدد المكونات
                        </span>
                        <span className="text-sm text-blueGray-400">
                          {order ? order.component.length :'no component'   }
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-x w100 font-bold block uppercase tracking-wide text-blueGray-600">
                          جاهزية الطلب
                        </span>
                        <span className="text-sm text-blueGray-400">
                          {order.component ? is_order_ready(order.component) : 'no data' }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    اوردر رقم ({ order? order.id : 'no num'})
                  </h3>
                  <h2
                    className="text-xl font-bold "
                    style={{ color: "rgb(12 66 236)" }}
                  >
                    {price ? price : order.price? order.price :0} LE
                  </h2>

                  <div className="text-sm  leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    { "shop"}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-0">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    حلويات الحلويات
                  </div>

                  <div className="block pb-6">
                    {component ? (
                      component.map((comp) => {
                        return (
                            <div key={Math.round(
                                Math.random() *100*Math.random()*100
                              )} className="inline-block mr-2">
                            
                             <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-${comp.isready ?'emerald':  "orange"}-500 uppercase  mt-2`}>
                              {comp.name}
                            </span>
                          </div>
                        );
                      })
                    ) : (
                      <>
                        {" "}
                        <button
                          className=" text-white w-10 py-1 px-2 text-xs hover:shadow  mt-2 rounded-full pr-4 px-1"
                          style={{
                            background: "rgba(249, 115, 22)",
                            marginRight: "-20px",
                          }}
                        >
                        X
                        </button>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-orange-500 uppercase  mt-2">
                          no component
                        </span>
                      </>
                    )}
                  </div>
                
                  </div>
                  
                  <Link to={'/admin/tables'} className="bg-blueGray-600 p-2 rounded mt-1 text-white" >back</Link>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {order.description ? order.description : "no description"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

