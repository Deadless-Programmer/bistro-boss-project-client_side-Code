import { useContext } from "react"
import { AuthContext } from "../providers/AuthProviders"
import { Navigate, useLocation } from "react-router-dom";


export const PrivetRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if(user){
        return children;
    }
  return (
   <Navigate to="/login" state={{from:location}} replace={true}></Navigate>
  )
}
