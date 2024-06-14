import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "../../../../../public/loading.json"
import { IoSearch } from "react-icons/io5";


const MyClasses = () => {
    const axiosSecure = useAxiosSecure();
    const [myClass, setMyClass] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useContext(AuthContext);
    const  url = `https://skill-dynamo-server.vercel.app/allClasses?email=${user?.email}`
    console.log(myClass);

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setMyClass(data)
            })
        }, 2000)
    }, [url, isLoading])


    const handleDeleteUser = user => {
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/allClasses/${user._id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "User removed successfully.",
                            icon: "success"
                          });
                    }
                })
              
            }
          });
    }


    
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
            <div className="border-b-2 border-blue-400 pb-4 mb-10">
            <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-white">My Submited Class : {myClass.length}</h1>
                <p className="text-gray-200 font-semibold">My Class Data.</p>
            </div>
            <input value={searchValue} onChange={handleInputChange} className="border-2 border-blue-400 p-2 bg-gray-800 rounded-md w-1/2 text-gray-200" placeholder="Find class" type="text" />
           <button onClick={handleSearch} className="text-3xl text-blue-400 absolute right-12"><IoSearch ></IoSearch></button>
        </div>
            
        </div>

        {isLoading ? <div className="flex justify-center items-center h-screen">
                    <div className="w-96">
                    <Lottie animationData={loading}></Lottie>
                    </div>
                </div>
                :
                <div className="grid grid-cols-3 gap-7">
           {
                        myClass.map(course => <div key={course._id}>
                            <div className="relative bg-gray-700 border-2 border-blue-400 rounded-lg">
                                <img className=" w-full h-72 mb-2" src={course.image} alt="" />

                                <div className="flex justify-between px-3">
                                <div className="flex items-center gap-3 mb-2">
                                <FaRegUserCircle className="text-blue-400"></FaRegUserCircle>
                                <p className="text-gray-200">{course.instructorName}</p>
                                </div>

                                <div className="flex items-center gap-3">
                               <div className="text-blue-400">
                                <MdEmail></MdEmail>
                                </div>
                                <p className="text-gray-200">{course.email} <span className="text-xs text-blue-400"></span></p>
                               </div>
                               </div>

                               <div className="-ml-2 w-28 flex justify-center">
                                    <p className="text-white bg-blue-500 p-1 rounded-md">{course.status}</p>
                               </div>


                                <div className="absolute left-3 top-3 bg-gradient-to-r from-sky-500 to-sky-800 p-2 rounded-md">
                                    <p className="text-gray-200 font-semibold">$ {course.price}</p>
                                </div>
                                <h1 className=" px-3 bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent text-xl font-bold mb-2">{course.title}</h1>
                                <p className="text-gray-200 mb-3 px-3">{course.description}</p>
                
                               
                               <div className="flex items-center gap-3 px-3 mb-3">
                               <div className=" text-blue-400">
                                <FaRegUserCircle></FaRegUserCircle>
                                </div>
                                <p className="text-gray-200">{course.instructorName} <span className="text-xs text-blue-400">(Instructor)</span></p>
                               </div>
                               
                               <div className="flex items-center gap-3 px-3 mb-3">
                               <div className="text-blue-400">
                                <MdEmail></MdEmail>
                                </div>
                                <p className="text-gray-200">{course.email} <span className="text-xs text-blue-400"></span></p>
                               </div>
                              
                
                {/*                
                                      <Rating
                                      style={{ maxWidth: 40 }}
                                      value={0}
                                      readOnly/> */}
                
                                <hr />
                       
                
                            <div className="flex items-center justify-between">
                            <div className="px-3 py-3">
                            <Link to={`/userDashboard/myClassesDetails/${course._id}`} >
                            <button data-tip="View details" className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-800 rounded-md tooltip text-xs">Details</button>
                            </Link>
                            </div>
                            <div className="px-3 py-3">
                            <Link to={`/userDashboard/myClass`}>
                            <button data-tip="Update data" className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-800 w-full rounded-md tooltip text-xs">Update</button>
                            </Link>
                            </div>
                            <div className="px-3 py-3">
                            <button data-tip="Delete class" onClick={() => handleDeleteUser(course)} className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-800 w-full rounded-md tooltip text-xs">Detete</button>
                            </div>
                            </div>
                             
                
                            </div>
                        </div>)
                    }
        </div>}

            
        </div>
        
    );
};

export default MyClasses;