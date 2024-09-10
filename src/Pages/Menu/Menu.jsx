import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
 import desertImg from '../../assets/menu/dessert-bg.jpeg'
 import pizzaImg from '../../assets/menu/pizza-bg.jpg'
 import saladImg from '../../assets/menu/salad-bg.jpg'
 import soupImg from '../../assets/menu/salad-bg.jpg'
//  import desertImg from '../../assets/menu/dessert-bg.jpeg'




const Menu = () => {

    const [menu]= useMenu();
    const offered = menu.filter(item=> item.category === "offered")
    const dessert = menu.filter(item=> item.category === "dessert")
    const pizza = menu.filter(item=> item.category === "pizza")
    const salad = menu.filter(item=> item.category === "offered")
    const soup = menu.filter(item=> item.category === "soup")
    const drinks = menu.filter(item=> item.category === "drinks")
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="OUR MENU"
        paragraph={"Would you like to try your dish?"}
      ></Cover>

      <SectionTitle subHeading="Dont't Miss " heading={"today's offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory img={desertImg} title="desert"
        paragraph={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"}  items={dessert}></MenuCategory>
      <MenuCategory img={pizzaImg} title="pizza"
        paragraph={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"}  items={pizza}></MenuCategory>
      <MenuCategory img={saladImg} title="salad"
        paragraph={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"}  items={salad}></MenuCategory>
      <MenuCategory img={soupImg} title="soup"
        paragraph={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"}  items={soup}></MenuCategory>
      <MenuCategory img={soupImg} title="drinks"
        paragraph={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"}  items={drinks}></MenuCategory>
    </div>
  );
};

export default Menu;
