import React, { useState } from "react";
import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderCard from "../../components/OrderCard/OrderCard";
import OrderTabs from "./OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {

  const categories =['salad', 'pizza', 'soup', 'desert', 'drinks'];
  const {category}= useParams();
  const initialIndex = categories.indexOf(category);
  const [tabInedx, setTabIndex] = useState(initialIndex);
  const [menu]= useMenu();
  const soup = menu.filter(item=> item.category === "soup")
  const dessert = menu.filter(item=> item.category === "dessert")
  const pizza = menu.filter(item=> item.category === "pizza")
  const salad = menu.filter(item=> item.category === "offered")
  const drinks = menu.filter(item=> item.category === "drinks")
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        img={coverImg}
        title="Our shop"
        paragraph={"Would you like to try a dish"}
      ></Cover>

      <Tabs defaultIndex={tabInedx} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESERT</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>

          <OrderTabs items={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs items={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs items={dessert}></OrderTabs>
        </TabPanel>

        <TabPanel>
        <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
