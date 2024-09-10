import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLoginPage from "../SocialLoginPage/SocialLoginPage";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit, reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const email = data.useremail;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.username, data.userPhoto).then(() => {
          console.log('Profile updated')
         
          const userInfo ={
            name : data.username,
            email
          }
          axiosPublic.post('users', userInfo).then(res=>{
            if(res.data.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            }
          })
          
         
        }).catch((error) => {
         console.log(error)
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: true })}
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="userPhoto" className="block dark:text-gray-400">
              UserPhoto
            </label>
            <input
              type="text"
              {...register("userPhoto", { required: true })}
              id="userPhoto"
              placeholder="UserPhoto"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="useremail" className="block dark:text-gray-400">
              Useremail
            </label>
            <input
              type="text"
              {...register("useremail", { required: true })}
              id="useremail"
              placeholder="Useremail"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true, maxLength: 20 })}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800"
            />
            {errors.password?.type === "maxLength" && (
              <p role="alert">
                Your password should be a maximum of 20 characters
              </p>
            )}
            <div className="flex justify-end text-xs dark:text-gray-400">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
          >
            Sign Up
          </button>
        </form>
       <SocialLoginPage></SocialLoginPage>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link to="/login" className="underline dark:text-gray-100">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
