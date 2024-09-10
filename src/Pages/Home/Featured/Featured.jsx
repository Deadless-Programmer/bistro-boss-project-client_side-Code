import React from "react";
import SectionTitle from "../../../components/SectionTitle";

import image from "../../../assets/home/featured.jpg";

import "./Featured.css";
import { Link } from "react-router-dom";
const Featured = () => {
  return (
    <div className="mt-16 bg-img bg-fixed p-10 mb-10 text-white">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className=" mt-5 flex w-3/4 mx-auto space-x-10 items-center bg-slate-600 p-10  ">
        <img className="w-[400px]" src={image} alt="" />

        <div className="text-white">
          <p className="text-base font-medium">March 20, 2023</p>
          <h2 className="text-lg font-normal">WHERE CAN I GET SOME?</h2>
          <p className="text-sm font-light ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <div className="">
          <Link to="/order">
            <button className="py-2 px-3 mt-3  border-b-orange-500 border-b-2 rounded-lg font-medium hover:bg-orange-400 hover:text-white">
              Read More
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
