import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLoginPage from "../SocialLoginPage/SocialLoginPage";

const Login = () => {
  const { loggedUser } = useContext(AuthContext);
  // const capthcaRef =useRef(null)

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const [disabled, setDisabled] = useState(true);

  const handleLogin = () => {
    event.preventDefault();
    const form = event.target;
    const email = form.useremail.value;
    const password = form.password.value;
    console.log(email, password);
    loggedUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "User login Successfully",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValiddedCaptcha = (e) => {
    const value = e.target.value;
    console.log(value);
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className="w-full max-w-md p-8   space-y-3 rounded-xl bg-gray-900 ">
        <h1 className="text-2xl  font-bold text-center text-gray-100">Login</h1>
        <form
          onSubmit={handleLogin}
          novalidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label for="useremail" className="block text-gray-100">
              Useremail
            </label>
            <input
              type="text"
              name="userEmail"
              id="useremail"
              placeholder="Useremail"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-gray-100">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-xs text-gray-100">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <div>
              {" "}
              <LoadCanvasTemplate />
            </div>
            <input
              onBlur={handleValiddedCaptcha}
              type="text"
              name="text"
              id="text"
              placeholder="Put the captcha"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            {/* <button  className="text-white py-1 px-2 bg-orange-500 rounded-sm">Valided</button> */}
          </div>
          <button
            type="submit"
            disabled={disabled}
            className="w-full cursor-pointer text-gray-100 p-3 text-center rounded-sm bg-violet-400"
          >
            Sign in
          </button>
        </form>
     <SocialLoginPage></SocialLoginPage>
        <p className="text-xs text-center sm:px-6 text-gray-100">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/signup"
            className="underline text-gray-100"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
