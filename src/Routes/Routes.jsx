import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Secret from "../components/secret/secret";
import { PrivetRoute } from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import { AdminRoute } from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element: <Menu/>
        },
        {
          path :'/order/:category',
          element :<Order/>
        },
        {
          path :'/login',
          element : <Login/>
        },
        {
          path :'signup',
          element :<SignUp/>
        },
        {
          path :'secret',
          element : <PrivetRoute><Secret/></PrivetRoute>
        }
      ]
    },


    {
      path:'dashboard',
      element: <PrivetRoute><Dashboard/></PrivetRoute>,
      children:[

        // Addmin routes
        {
          path:'admin-home',
          element: <AdminRoute>
             <AdminHome/>
          </AdminRoute>

        },
        {
          path : 'all-users',
          element:<AdminRoute><AllUsers/></AdminRoute>
        },
        {
          path: 'add-items',
          // element:<AddItems></AddItems>
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path : 'manage-items',
          element:<AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
          
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
          
        },

        // users routes
        {
          path:'userHome',
          element:<UserHome/>
        },
        {
          path:'reservation',
          element:<Reservation/>
        },
        {
          path:'mycarts',
          element:<MyCart/>,
        
        },
        {
          path:'payment',
          element:<Payment></Payment>,
        
        },
        {
          path:'addreview',
          element:<AddReview/>
        },
        {
          path:'payment-history',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'mybookings',
          element:<MyBookings/>
        }
      ]
    }
  ]);