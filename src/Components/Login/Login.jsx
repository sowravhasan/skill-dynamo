import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { useContext  } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import signupAnimation from "../../../public/signup.json"
import Lottie from "lottie-react";
// import { Helmet } from "react-helmet-async";
import { AiOutlineIssuesClose } from 'react-icons/ai';
import Navbar from "../Navbar/Navbar";
import useAxiosUser from "../../Hooks/useAxiosUser";


const Login = () => {
  const {googleSignUp, login} = useContext(AuthContext);
  const axiosUser = useAxiosUser();
  const location = useLocation();
  const navigate = useNavigate();



  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const toastId = toast.loading("Login...")

    login(email, password)
    .then(result => {
        console.log(result.user);
        toast.success('Logged in successfully.', { id: toastId})
        navigate(location?.state? location.state : "/")
    })
    .catch(error => {
        console.error(error);
    })
    
}

    const googleSignIn = () => {
      googleSignUp()
      .then(result => {
          console.log(result.user);
          const userInfo = {
              name: result.user?.displayName,
              email: result.user?.email
          }
          axiosUser.post('/users',userInfo )
          .then(res => {
              console.log(res);
              navigate(location?.state? location.state : "/")
          })
      })
  }



    return (
        <div>
          <Navbar></Navbar>
            <div className="max-w-6xl mx-auto px-5 md:px-0">
            {/* <Helmet>
              <title>Food For Life | Sign Up</title>
          </Helmet> */}
            <div className="flex flex-col md:flex-row py-10">
            <div>
                <div className="w-full md:w-80 h-full bg-gradient-to-r from-sky-500 to-sky-800 p-6 flex justify-center items-center rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
                    <div className="w-40 md:w-full">
                    <Lottie animationData={signupAnimation}></Lottie>
                    </div>
                </div>
            </div>
            <form onSubmit={handleLogin} className="bg-[#080826] border-x-2 md:border-l-0 md:border-r-2 md:border-t-2 border-b-2 border-blue-400 p-10 md:p-20 rounded-b-2xl md:rounded-b-none  md:rounded-r-2xl">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent">Login</h1>
                <p className="mb-7 text-gray-400">Login your account to view our awesome features!!</p>

            <div className="">
            <div className="relative h-11 w-full mb-6">
        <input required
        type="text"
          className="bg-[#1d1c3d] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
          placeholder=" " name="email"
        />
        <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>






 












      <div className="relative h-11 w-full">
        <input required
        // type={showPassword ? "text" : "password"}
        type="password"
          className="bg-[#1d1c3d] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
          placeholder=" " name="password"
        />
        <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
        {/* <button className="text-2xl absolute right-4 top-2" onClick={ () => setShowPassword(!showPassword)}>
                       {
                         showPassword ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                       }
                     </button> */}
      </div>





 



      <div className="flex items-center justify-between">
<div className="inline-flex items-center">
<label
  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
  htmlFor="checkbox"
  data-ripple-dark="true"
>
  <input
    type="checkbox"
    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-gradient-to-r from-sky-500 to-sky-800 hover:before:opacity-10"
    id="checkbox"
  />
  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
</label>
<label
  className="mt-px cursor-pointer select-none font-light text-gray-700"
  htmlFor="checkbox"
>
  <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-400 antialiased">
    Remember me
  </p>
</label>
</div>


<Link className="flex gap-2 items-center">
  <AiOutlineIssuesClose className="text-xl text-blue-600"></AiOutlineIssuesClose>
  <p className="text-gray-400">Forgot your password?</p>
</Link>
</div>

            </div>


            <button
      className="mt-6 block w-full select-none rounded-lg bg-gradient-to-r from-sky-500 to-sky-800 py-4 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      Login
    </button>
    <p className="text-center mt-4 text-gray-400">Don't have and account? <Link to={'/signup'} className="font-bold text-blue-500">Sign Up</Link></p>

        <div className="flex justify-center items-center gap-5 mt-4">
            <div className="bg-gray-500 h-0.5 w-16"></div> 
            <p className="text-gray-400">Or</p>
            <div className="bg-gray-500 h-0.5 w-16"></div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-0 md:gap-8">
        <button onClick={googleSignIn}
      className="mt-6 w-full select-none rounded-lg py-4 px-6 text-center align-middle font-sans text-sm font-bold uppercase border transition-all hover:shadow-sm hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex gap-5 items-center text-gray-400"
      data-ripple-light="true"
    >
        <FcGoogle className="text-2xl text-blue-700"></FcGoogle>
      Continue With Google
    </button>

    <button
      className="text-gray-400 mt-6 w-full select-none rounded-lg py-4 px-6 text-center align-middle font-sans text-sm font-bold uppercase border transition-all hover:shadow-sm hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex gap-5 items-center"
      data-ripple-light="true"
    >
        <FaSquareFacebook className="text-2xl text-blue-500"></FaSquareFacebook>
      Continue With Facebook
    </button>

        </div>
        </form>
        
            

            </div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>

            </div>
        </div>
    );
};

export default Login;