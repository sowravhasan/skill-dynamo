import { FaUser } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import loading from "../../../../../public/loading.json"
import Lottie from "lottie-react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const MyEnrolledClass = () => {
    const [myEnrolledClass, setMyEnrolledClass] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const {isPending:isLoading,  data: enrolledClass =[] } = useQuery({
        queryKey: ['enrolledClass', user?.email],
        queryFn: async () => {
         const res = await axiosSecure.get(`/enrolledClass?email=${user?.email}`);
         setMyEnrolledClass(res.data)
        return res.data
     } 
    })


              // search functionality

              const handleInputChange = (e) => {
                setSearchValue(e.target.value);
              };
        
        
        
              const handleSearch = () => {
                const filtered = myEnrolledClass.filter((data) =>
                  data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                  data.instructorName.toLowerCase().includes(searchValue.toLowerCase())
                );
              
                setMyEnrolledClass(filtered);
              };
             // ------------ Search End----------------


    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-white">My Enrolled Class : {myEnrolledClass.length}</h1>
                <p className="text-gray-200 font-semibold">My classes.</p>
            </div>
            <input value={searchValue} onChange={handleInputChange} className="border-2 border-blue-400 p-2 bg-gray-800 rounded-md w-1/2 text-gray-200" placeholder="Find class" type="text" />
           <button onClick={handleSearch} className="text-3xl text-blue-400 absolute right-12"><IoSearch ></IoSearch></button>
        </div>


        {
            isLoading? <div className="flex justify-center items-center h-screen">
            <div className="w-96">
            <Lottie animationData={loading}></Lottie>
            </div>
        </div>
            :
            <div className="grid grid-cols-3 gap-6">
        
                {
                    myEnrolledClass.map((course) => <div key={course._id}>
                    <div className="bg-gray-700 border-2 border-blue-400 rounded-lg">
                        <img className=" w-full h-72 mb-4" src={course.image} alt="" />

                       <div className="flex gap-9 px-3">
                       <div className="rounded-md p-1">
                             <div className=" flex items-center gap-3">
                             <IoIosPricetag className="text-blue-400 text-xl"></IoIosPricetag>
                             <p className="text-gray-200 font-semibold text-sm">$ {course.price}</p>
                            </div>
                        </div>

                        <div className="rounded-md p-1">
                             <div className=" flex items-center gap-3">
                             <FaUser className="text-blue-400 text-lg"></FaUser>
                             <p className="text-gray-200 font-semibold text-sm">$ {course.instructorName}</p>
                            </div>
                        </div>
                       </div>


                        <h1 className=" px-3 bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent text-xl font-bold mb-2">{course.title}</h1>
        
                       
                       {/* <div className="flex items-center gap-3 px-3 mb-3">
                       <div className="bg-gradient-to-r from-sky-500 to-sky-800 text-gray-200 text-xl p-2 rounded-full">
                        <FaHouseUser></FaHouseUser>
                        </div>
                        <p className="text-gray-200">{course.instructorName} <span className="text-xs text-blue-400">(Instructor)</span></p>
                       </div>

                       <div className="px-3 py-2 flex items-center gap-4">
                        <IoIosPricetag className="text-blue-400 text-2xl"></IoIosPricetag>
                        <p className="text-gray-200 font-semibold">$ {course.price}</p>
                       </div> */}
                      
        
        {/*                
                              <Rating
                              style={{ maxWidth: 40 }}
                              value={0}
                              readOnly/> */}
        
                        <hr />
               
        
                    <div className="px-3 py-3">
                    <Link to={`/userDashboard/myEnrolledClassDetails/${course._id}`} className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-800 w-full rounded-md">Continue</Link>
                    </div>
                     
        
                    </div>
                </div>)
                }
            </div>

        }
        
        </div>
    );
};

export default MyEnrolledClass;