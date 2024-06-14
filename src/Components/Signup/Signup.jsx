import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import profile from "../../../public/profile.json";
import signupAnimation from "../../../public/signup.json";
import Lottie from "lottie-react";
import Navbar from "../Navbar/Navbar";
import useAxiosUser from "../../Hooks/useAxiosUser";
// import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { signUp, googleSignUp, updateProfileInfo } = useContext(AuthContext);
  const axiosUser = useAxiosUser();
  const inputRef = useRef(null);
  const [image, setImage] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const [gender, setGender] = useState("Male"); // Default value
  const [role, setRole] = useState("Student");

  const handleImageSubmit = () => {
    inputRef.current.click();
  };

  const habdleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const email = e.target.email.value;
    // const gender = e.target.gender.value;
    const phone = e.target.phone.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    console.log(firstName, email, phone, photo, password, confirmPassword);

    const toastId = toast.loading("Signing up...");

    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfileInfo(firstName, photo)
        .then(() => {
          const userInfo = { firstName, email, role, gender };
          axiosUser.post("/users", userInfo)
          .then((res) => {
            console.log(res.data);

            if (res.data.insertedId) {
              toast.success("Signed up successfully.", { id: toastId });
              navigate(location?.state ? location.state : "/");
            }
          });
        });
      })
      .catch((error) => console.log(error))

      .catch((error) => {
        console.log(error);
      });
  };






  

  const googleSignIn = () => {
    googleSignUp().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        role,
      };
      axiosUser.post("/users", userInfo).then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
      });
    });
  };

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
          <form
            onSubmit={handleSignUp}
            className="bg-[#080826] border-x-2 md:border-l-0 md:border-r-2 md:border-t-2 border-b-2 border-blue-400 p-10 md:p-20 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"
          >
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent">
              Sign Up
            </h1>
            <p className="mb-7 text-gray-400">
              Create an account to view our awesome features!!
            </p>

            <div className="flex justify-center">
              {image ? (
                <img
                  className="w-40 mb-4 rounded-3xl"
                  src={URL.createObjectURL(image)}
                  alt=""
                />
              ) : (
                <div className="w-40">
                  <Lottie animationData={profile}></Lottie>
                </div>
              )}
              <input
                className="hidden"
                onChange={habdleImageChange}
                type="file"
                ref={inputRef}
              />
              <div
                onClick={handleImageSubmit}
                className="bg-rose-600 hover:bg-rose-500 transition duration-300 text-white p-3 rounded-full w-7 h-7 flex justify-center items-center mt-24 -ml-10 z-10 font-bold cursor-pointer"
              >
                +
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative h-11 w-full">
                <input
                  required
                  type="text"
                  className="bg-[#1d1c3d] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                  placeholder=" "
                  name="firstName"
                />
                <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>

              <div className="relative h-11 w-full">
                <input
                  required
                  type="email"
                  className=" bg-[#1d1c3d] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                  placeholder=" "
                  name="email"
                />
                <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>

              <div className="relative h-11 w-full">
                <select
                  required
                  value={role}
                  onChange={handleRoleChange}
                  name="gender"
                  className="px-3 w-full h-11 bg-[#1d1c3d] text-gray-500 rounded-md"
                  id=""
                >
                  <option disabled value="Gender">
                    Select Role
                  </option>
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                </select>
              </div>

              <div className="relative h-11 w-full">
                <select
                  required
                  value={gender}
                  onChange={handleGenderChange}
                  name="gender"
                  className="px-3 w-full h-11 bg-[#1d1c3d] text-gray-500 rounded-md"
                  id=""
                >
                  <option disabled value="Gender">
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="relative h-11 w-full">
                <input
                  type="text"
                  className="bg-[#1d1c3d] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                  placeholder=" "
                  name="phone"
                />
                <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Phone
                </label>
              </div>

              <div className="relative h-11 w-full">
                <input
                  required
                  type="text"
                  className="bg-[#1d1c3d] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                  placeholder=" "
                  name="photo"
                />
                <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Photo URL
                </label>
              </div>

              <div className="relative h-11 w-full">
                <input
                  required
                  // type={showPassword ? "text" : "password"}
                  type="password"
                  className="bg-[#1d1c3d] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                  placeholder=" "
                  name="password"
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

              <div className="relative h-11 w-full">
                <input
                  required
                  type="text"
                  className="bg-[#1d1c3d] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                  placeholder=" "
                  name="confirmPassword"
                />
                <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Confirm Password
                </label>
              </div>
            </div>

            <div className="inline-flex items-center mt-3">
              <label
                className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                htmlFor="checkbox"
                data-ripple-dark="true"
              >
                <input
                  required
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
                <p className="flex items-center font-sans text-xs md:text-sm font-normal leading-normal text-gray-500 antialiased">
                  I've read and agree with
                  <a
                    className="font-medium transition-colors text-gray-300 hover:text-blue-400"
                    href="#"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </p>
              </label>
            </div>

            <button
              className="mt-6 block w-full select-none rounded-lg bg-gradient-to-r from-sky-500 to-sky-800 py-4 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Sign Up
            </button>
            <p className="text-center mt-4 text-gray-400">
              Already have and account?{" "}
              <Link to={"/login"} className="font-bold text-blue-500">
                Sign In
              </Link>
            </p>

            <div className="flex justify-center items-center gap-5 mt-4">
              <div className="bg-gray-500 h-0.5 w-16"></div>
              <p className="text-gray-400">Or</p>
              <div className="bg-gray-500 h-0.5 w-16"></div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-0 md:gap-8">
              <button
                onClick={googleSignIn}
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
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default SignUp;
