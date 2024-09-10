import axios from "axios"
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";



 const axiosSecure = axios.create({
    baseURL : 'http://localhost:5000/'
 })

const useAxiosSecure = () => {
      const {userSignOut}= useAuth();
      const navigate = useNavigate();
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token');
    console.log('request stoped by interceptors' , token);
    config.headers.authorization =`Bearer ${token}`
    return config;
  }, function(error){
    return Promise.reject(error)
  });

  axiosSecure.interceptors.response.use(function(response){
    return response;
  }, async(error)=>{
    const status = error.response.status;
    if(status === 401 || status === 403){
      await userSignOut();
      navigate('/login')
    }
    return Promise.reject(error)
  })
  return axiosSecure;
}

export default useAxiosSecure