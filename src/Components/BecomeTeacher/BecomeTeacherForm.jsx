import { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import profile from "../../../public/profile.json"
import signupAnimation from "../../../public/signup.json"
import Lottie from "lottie-react";
import Navbar from "../Navbar/Navbar";
import useAxiosUser from "../../Hooks/useAxiosUser";
import { useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";


const BecomeTeacherForm = () => {
//   const {signUp} = useContext(AuthContext);
//   const axiosUser = useAxiosUser();
  const inputRef = useRef(null);
  const [image, setImage] = useState();
  const [category, setCategory] = useState("Web Development"); // Default value
  const [experience, setExperience] = useState("Beginner");
//   const location = useLocation();
//   const navigate = useNavigate();

  const handleImageSubmit = () => {
    inputRef.current.click();
  }

  const habdleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
      const title = e.target.title.value;
      const email = e.target.email.value;
      const image = e.target.photo.value;
      console.log(firstName, title, email);

    const toastId = toast.loading("Request Processing...")

    const userInfo = {firstName, title, email, status:'pending',category, experience, image};
    

    fetch('https://skill-dynamo-server.vercel.app/instructors', {
        method : "POST",
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            toast.success('Request Accepted Successfully.', { id: toastId})
            }
    })
}

const handleCategoryChange = (e) => {
  setCategory(e.target.value);
};

const handleExperienceChange = (e) => {
  setExperience(e.target.value);
};



    return (
        <div>
          <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
            {/* <Helmet>
              <title>Food For Life | Sign Up</title>
          </Helmet> */}
            <div className="flex py-10">
            <div>
                <div className="w-80 h-full bg-gradient-to-r from-sky-500 to-sky-800 p-6 flex justify-center items-center rounded-l-2xl">
                    <div className="w-full">
                    <Lottie animationData={signupAnimation}></Lottie>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-[#080826] w-full border-r-2 border-t-2 border-b-2 border-blue-400 p-10 md:p-20 rounded-r-2xl">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent">Start teaching today!</h1>
                <p className="mb-7 text-gray-400">Join us as an instructor.</p>

                <div className="flex justify-center">
                  { image? <img className="w-40 mb-4 rounded-3xl" src={URL.createObjectURL(image)} alt="" /> 
                    :
                    <div className="w-40"><Lottie animationData={profile}></Lottie></div>
                    }
                  <input className="hidden" onChange={habdleImageChange} type="file" ref={inputRef} />
                  <div onClick={handleImageSubmit} className="bg-rose-600 hover:bg-rose-500 transition duration-300 text-white p-3 rounded-full w-7 h-7 flex justify-center items-center mt-24 -ml-10 z-10 font-bold cursor-pointer">
                      +
                  </div>
                </div>
            <div className="grid grid-cols-2 gap-5">
            <div className="relative h-11 w-full">
        <input
        type="text"
          className="bg-[#1a1941] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
          placeholder=" " name="firstName"
        />
        <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          First Name
        </label>
      </div>



      <div className="relative h-11 w-full">
        <input
        type="text"
          className="bg-[#1a1941] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
          placeholder=" " name="title"
        />
        <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Title
        </label>
      </div>




      <div className="relative h-11 w-full">
        <input
        type="email"
          className="bg-[#1a1941] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
          placeholder=" " name="email"
        />
        <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>
      <div className="relative h-11 w-full">
        <input
        type="text"
          className="bg-[#1a1941] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
          placeholder=" " name="photo"
        />
        <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Photo URL
        </label>
      </div>



      <div className="relative h-11 w-full">
        <select value={category} onChange={handleCategoryChange} name="gender" className="px-3 w-full h-11 bg-[#1a1941] text-gray-500 rounded-md" id="">
          <option value="">Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Programming">Programming</option>
          <option value="CSE Fundamentals">CSE Fundamentals</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Accounting">Accounting</option>
        </select>
      </div>


      <div className="relative h-11 w-full">
        <select value={experience}  onChange={handleExperienceChange} name="gender" className="px-3 w-full h-11 bg-[#1a1941] text-gray-500 rounded-md" id="">
          <option value="">Experience</option>
          <option value="Begineer">Begineer</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Experienced">Experienced</option>
        </select>
      </div>







            </div>




            


            <button
      className="mt-6 block w-full select-none rounded-lg bg-gradient-to-r from-sky-500 to-sky-800 py-4 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      Submit for review
    </button>
  
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

export default BecomeTeacherForm;