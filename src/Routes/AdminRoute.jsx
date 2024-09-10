
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


export const AdminRoute = ({children}) => {
    const {user, loading}=useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] =useAdmin();
    console.log(location)
    if(loading || isAdminLoading ){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if(user && isAdmin){
        return children;
    }
  return (
   <Navigate to="/" state={{from:location}} replace={true}></Navigate>
  )
}