
import { useEffect, useState } from "react";
import {  FaHouseUser, FaUsersSlash, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import loading from "../../../public/loading.json"
import Lottie from "lottie-react";
import { FaBlog } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";


const AllClasses = () => {
    const [myClass, setMyClass] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');




    const  url = `https://skill-dynamo-server.vercel.app/allClasses`
    console.log(myClass);

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyClass(data)
                setIsLoading(false)
            })
        }, 2000)
    }, [url])


    const acceptedClass = myClass.filter(menu => menu.status === 'Accepted');


             // search functionality

             const handleInputChange = (e) => {
                setSearchValue(e.target.value);
              };
        
        
        
              const handleSearch = () => {
                const filtered = myClass.filter((data) =>
                  data.title.toLowerCase().includes(searchValue.toLowerCase())
                );
                setMyClass(filtered);
              };
             // ------------ Search End----------------

    return (
        <div>
            

            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto py-10 px-5 md:px-0">
            
            <div className="relative flex flex-col md:flex-row items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div className="flex items-center gap-4 mb-5 md:mb-0">
                <FaBlog className="text-4xl text-blue-400"></FaBlog>
                <h1 className="text-3xl font-bold text-white">Our Classes</h1>
            </div>
           <input value={searchValue} onChange={handleInputChange} className="border-2 border-blue-400 p-2 bg-gray-800 rounded-md w-full md:w-1/2 text-gray-200" placeholder="Find class" type="text" />
           <button onClick={handleSearch} className="text-2xl text-blue-400 absolute right-3 top-16 md:top-2.5 md:right-3"><IoSearch ></IoSearch></button>
        </div>

            {
                isLoading ? <div className="flex justify-center items-center h-screen">
                <div className="w-96">
                <Lottie animationData={loading}></Lottie>
                </div>
            </div> : <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {
                             acceptedClass.map(course => <div key={course._id}>
                                 <div className="relative bg-gray-700 border-2 border-blue-400 rounded-lg">
                                     <img className=" w-full h-72 mb-4" src={course.image} alt="" />
                                     <div className="absolute left-3 top-3 bg-gradient-to-r from-sky-500 to-sky-800 p-2 rounded-md">
                                         <p className="text-gray-200 font-semibold">$ {course.price}</p>
                                     </div>
                                     <h1 className=" px-3 bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent text-xl font-bold mb-2">{course.name}</h1>
                                     <p className="text-gray-200 mb-3 px-3">{course.description}</p>
                     
                                    
                                    <div className="flex items-center gap-3 px-3 mb-3">
                                    <div className="bg-gradient-to-r from-sky-500 to-sky-800 text-gray-200 text-xl p-2 rounded-full">
                                     <FaHouseUser></FaHouseUser>
                                     </div>
                                     <p className="text-gray-200">{course.author_name} <span className="text-xs text-blue-400">(Instructor)</span></p>
                                    </div>
                                   
                     
                     {/*                
                                           <Rating
                                           style={{ maxWidth: 40 }}
                                           value={0}
                                           readOnly/> */}
                     
                                     <hr />
                            
                     
                                  <div className="flex items-center gap-3 px-3 mt-3 mb-2">
                                     <FaVideo className="text-blue-400"></FaVideo>
                                     <p className="text-gray-200 font-semibold">Free Webiner</p>
                                  </div>
                                  <div className="flex items-center gap-3 px-3">
                                     <FaUsersSlash className="text-blue-400"></FaUsersSlash>
                                     <p className="text-gray-200 font-semibold">Total Enrollment:</p>
                                  </div>
                     
                                 <div className="px-3 py-3 w-full">
                                 <Link to={`/allClassesDetails/${course._id}`}>
                                 <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-800 rounded-md w-full">Enroll Now</button>
                                 </Link>
                                 </div>
                                  
                     
                                 </div>
                             </div>)
                         }
             </div>
            }
            </div>
        </div>
        
    );
};

export default AllClasses;