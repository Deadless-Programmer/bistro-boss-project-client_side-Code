import React from "react";
import MenuItems from "../MenuItems/MenuItems";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MenuCategory = ({ items, img, title, paragraph }) => {
  const {loading}=useAuth();
  if(loading){
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
  }
  // console.log(title);
  return (
    <div>
      {title && <Cover img={img} title={title} paragraph={paragraph}></Cover>}
      <div className="grid grid-cols-2 gap-10 mt-10">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <Link to={`/order/${title}`}>
          <button className="py-2   px-3 mt-3 border-b-orange-500 border-b-2 rounded-lg font-medium hover:bg-orange-400 hover:text-white">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
