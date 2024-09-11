import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaCartArrowDown } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import useAdmin from "../../../hooks/useAdmin";
const Navbar = () => {

  const {user, userSignOut}= useContext(AuthContext);

  const [cart]= useCarts();
  const [isAdmin] = useAdmin();
  const handleLoggedOut =()=>{
    userSignOut().then(()=>{}).catch(error=>{
      console.log(error)
    }
    )
  }
  const content = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
     
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      {
            user && isAdmin && <li><Link to="/dashboard/admin-home">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
      {/* <li>
        <Link to="/secret">Secret</Link>
      </li> */}
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
      <Link to='/dashboard/mycarts'>
      <button className="btn">
  Cart
  <div className="badge badge-secondary"> <FaCartArrowDown />{cart.length}</div>
</button>
      </Link>
      </li>

    { user? <> <li>
      {/* <span>{user?.displayName}</span>
      <span>{user?.photoURL}</span> */}
        <Link onClick={handleLoggedOut} to="#">Log Out</Link>
      </li></> : <> <li>
        <Link to="/login">Login</Link>
      </li></>}
      
      
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl text-white mx-auto bg-black opacity-65">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {content}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{content}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
