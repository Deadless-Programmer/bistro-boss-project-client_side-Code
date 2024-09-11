import React from "react";
import {
  FaAd,
  FaAlignLeft,
  FaChalkboard,
  FaGgCircle,
  FaHome,
  FaRegWindowMaximize,

  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import { MdAddHomeWork, MdContactPage } from "react-icons/md";
import { TbShoppingCartSearch } from "react-icons/tb";
import { LiaLuggageCartSolid } from "react-icons/lia";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [cart]= useCarts();
  return (
    <div className="flex">
      <div className="w-64 bg-orange-600 p-4 min-h-screen">
        {
          isAdmin ? <>
          
          <ul>
          <li className="">
            <Link to="admin-home">
              <span className="flex items-center gap-2 font-medium text-white">
              <MdAddHomeWork /> Admin Home
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="add-items">
              <span className="flex items-center gap-2 font-medium text-white">
              <LiaLuggageCartSolid /> Add Items
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="manage-items">
              <span className="flex items-center gap-2 font-medium text-white">
                <FaShoppingCart /> Manage Items
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="dashboard/manage-bookings">
              <span className="flex items-center gap-2 font-medium text-white">
              <TbShoppingCartSearch /> Manage Bookings
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="all-users">
              <span className="flex items-center gap-2 font-medium text-white">
              <FaUsers /> All Users
              </span>
            </Link>
          </li>
        </ul>
          
          </> : <>
          <ul>
          <li className="">
            <Link to="userHome">
              <span className="flex items-center gap-2 font-medium text-white">
                <FaHome /> User Home
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="reservation">
              <span className="flex items-center gap-2 font-medium text-white">
                <FaRegWindowMaximize /> Reservation
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="payment-history">
              <span className="flex items-center gap-2 font-medium text-white">
              <FaChalkboard />     Payment History
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="mycarts">
              <span className="flex items-center gap-2 font-medium text-white">
                <FaShoppingCart /> My Carts  {cart.length}
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="addreview">
              <span className="flex items-center gap-2 font-medium text-white">
              <FaAd /> Add a Review
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="mybookings">
              <span className="flex items-center gap-2 font-medium text-white">
                <FaGgCircle /> My Bookings
              </span>
            </Link>
          </li>
        </ul></>
        }
        <div className="divider">

        </div>
        {/* Shared navlink here */}
        <div>
        <ul>
        <li className="">
            <Link to="/">
              <span className="flex items-center gap-2 font-medium text-white">
                <FaHome />  Home
              </span>
            </Link>
          </li>
        <li className="">
            <Link to="/menu">
              <span className="flex items-center gap-2 font-medium text-white">
              <FaAlignLeft /> Menu
              </span>
            </Link>
          </li>
        <li className="">
            <Link to="/my-contact">
              <span className="flex items-center gap-2 font-medium text-white">
              <MdContactPage />  My Contact
              </span>
            </Link>
          </li>
        </ul>
        </div>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
