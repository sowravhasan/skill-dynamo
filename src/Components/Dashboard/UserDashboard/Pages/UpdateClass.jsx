
import { useContext, useRef, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAxiosUser from "../../../../Hooks/useAxiosUser";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const imgApiKey = '763882e480dd8ab664d9058115562cab';

// Construct the API URL using the key
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

const UpdateClass = () => {
    const allClassesDetails = useLoaderData();
    const {_id, title} = allClassesDetails;
    console.log(title);
  const {user} = useContext(AuthContext);
    const axiosUser = useAxiosUser();
    const inputRef = useRef(null);
    const [image, setImage] = useState();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image : data.image[0]}
        const res = await axiosUser.post(imgHostingApi, imageFile, {
          headers : {
            'content-type' : 'multipart/form-data'
          }
        });
        if(res.data.success){
          const info = {
            title: data.title,
            instructorName: data.instructorName,
            price: parseFloat(data.price),
            email: data.email,
            description: data.description,
            status: "pending",
            image: res.data.data.display_url
          }
          console.log(info);
          const menuRes = await axiosUser.post('/allClasses', info);
          console.log(menuRes.data);
          if(menuRes.data.insertedId){
            reset();
            Swal.fire({
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
        console.log(res.data);
      };


    const handleImageSubmit = () => {
        inputRef.current.click();
      }
    
      const habdleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
      }



      

  
  
    return (
       <div>
         <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4">
            <div>
                <h1 className="text-3xl font-bold text-white">Upload New Course</h1>
                <p className="text-gray-200 font-semibold">Add a new course in your directory</p>
            </div>
            <IoMdNotificationsOutline className="text-4xl font-bold text-blue-400"></IoMdNotificationsOutline>
        </div>
        

        <div>
            <h1 className="text-gray-200 font-bold text-xl py-7">File Upload</h1>
            <div className="mt-6">
              <input required {...register("image")} type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
              </div>


            {/* <div className="flex items-center gap-7">
            <div className="flex justify-center border w-96 p-14 border-dashed rounded-lg">
                  { image? <img  className="w-full mb-4 rounded-3xl" src={URL.createObjectURL(image)} alt="" /> 
                    :
                    <div onClick={handleImageSubmit} className="w-40 cursor-pointer"><MdOutlineFileUpload className="text-9xl text-gray-200 bg-blue-400 p-2 w-24 h-24 rounded-full mb-3"></MdOutlineFileUpload>
                    <p className="text-gray-200">Upload Image <span className="text-rose-500">*</span></p>
                    
                    </div>
                    }
                  <input {...register("image")} className="hidden" onChange={habdleImageChange} type="file" ref={inputRef} />
                </div>
            <div className="flex flex-col space-y-6">
            <div className="flex justify-center border w-72 border-dashed rounded-lg p-5">
                  { image? <img className="w-40 mb-4 rounded-3xl" src={URL.createObjectURL(image)} alt="" /> 
                    :
                    <div onClick={handleImageSubmit} className="w-full cursor-pointer flex items-center gap-6"><MdOutlineFileUpload className="text-6xl text-gray-200 bg-blue-400 p-2 w-16 h-16 rounded-full"></MdOutlineFileUpload>
                    <p className="text-gray-200">Banner Image</p>
                    
                    </div>
                    }
                  <input {...register("image")} className="hidden" onChange={habdleImageChange} type="file" ref={inputRef} />
                </div>
            <div className="flex justify-center border w-72 border-dashed rounded-lg p-6">
                  { image? <img className="w-40 mb-4 rounded-3xl" src={URL.createObjectURL(image)} alt="" /> 
                    :
                    <div onClick={handleImageSubmit} className="w-full cursor-pointer flex items-center gap-6"><MdOutlineFileUpload className="text-6xl text-gray-200 bg-blue-400 p-2 w-16 h-16 rounded-full"></MdOutlineFileUpload>
                    <p className="text-gray-200">Banner Image</p>
                    
                    </div>
                    }
                  <input  className="hidden" onChange={habdleImageChange} type="file" ref={inputRef} />
                </div>
            </div>
            </div> */}
        </div>

        <div>
            <h1 className="text-gray-200 font-bold text-xl py-7">Other Informations</h1>
            


            <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-6">
        <div className="relative h-11 w-full">
          <input {...register("title")} required
            type="text"
            className="bg-[#25235f] border border-blue-400 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
            placeholder=" "
          />
          <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Title
          </label>
        </div>

        <div className="relative h-11 w-full">
          <input {...register("price")} required
            type="text"
            className="bg-[#25235f] border border-blue-400 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
            placeholder=" "
          />
          <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Price
          </label>
        </div>

        <div className="relative h-11 w-full">
          <input {...register("instructorName")} required
            type="text"
            className="bg-[#25235f] border border-blue-400 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
            placeholder=" "
          />
          <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Instructor Name
          </label>
        </div>

        <div className="relative h-11 w-full">
          <input {...register("email")} defaultValue={user?.email}
            type="email"
            className="bg-[#25235f] border border-blue-400 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
            placeholder=" "
          />
          <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Email
          </label>
        </div>
      </div>

      <div className="relative h-32 w-full mt-7">
        <input {...register("description")} required
          type="text"
          className="bg-[#25235f] border border-blue-400 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
          placeholder=" "
        />
        <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Description
        </label>
      </div>

      <div className="flex justify-between items-center py-7">

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
        <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-500 antialiased">
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
          className=" block w-2/6 select-none rounded-lg bg-gradient-to-r from-sky-500 to-sky-800 py-4 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
         Submit For Review
        </button>
      </div>
    </form>
        </div>



       </div>
    );
};

export default UpdateClass;