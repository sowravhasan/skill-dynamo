import { FaHouseUser, FaUsersSlash, FaVideo } from "react-icons/fa";
import loading from "../../../public/loading.json"
import usePopularCourse from "../../Hooks/usePopularCourse";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";


const PopularClasses = () => {
    const [popularCourse, isLoading,refetch] = usePopularCourse();
    console.log(popularCourse);
    return (
        <div className="max-w-6xl mx-auto px-5 md:px-0 py-16">
                    <div className="flex items-center gap-5 mb-7">
                <div className="bg-blue-400 h-14 w-1 rounded-md"></div>
                <div>
                <h1 className="bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent font-bold text-3xl md:text-4xl">Discover Our Highly Popular Courses</h1>
                <p className="text-gray-300">Join our popular course</p>
                </div>
                </div>


                {
                    isLoading ? <div className="flex justify-center items-center h-screen">
                    <div className="w-96">
                    <Lottie animationData={loading}></Lottie>
                    </div>
                </div>
                :
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {
                popularCourse.map(course => <div key={course._id}>
                <div className="relative bg-gray-700 border-2 border-blue-400 rounded-lg">
                    <img className="border-b-2 border-blue-400 w-full h-72 mb-4" src={course.image} alt="" />
                    <div className="absolute left-3 top-3 bg-gradient-to-r from-sky-500 to-sky-800 p-2 rounded-md">
                        <p className="text-gray-200 font-semibold">$ {course.price}</p>
                    </div>
                    <h1 className=" px-3 bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent text-xl font-bold mb-2">{course.title}</h1>
                    <p className="text-gray-200 mb-3 px-3">{course.description}</p>
    
                   
                   <div className="flex items-center gap-3 px-3 mb-3">
                   <div className="bg-gradient-to-r from-sky-500 to-sky-800 text-gray-200 text-xl p-2 rounded-full">
                    <FaHouseUser></FaHouseUser>
                    </div>
                    <p className="text-gray-200">{course.instructorName} <span className="text-xs text-blue-400">(Instructor)</span></p>
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
                    <p className="text-gray-200 font-semibold">Total Enrollment: {course.total_enrollment
    }</p>
                 </div>
    
                <div className="px-3 py-3">
                <Link to={`/popularClassDetails/${course._id}`}>
                                 <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-800 rounded-md w-full">Enroll Now</button>
                                 </Link>
                </div>
                 
    
                </div>
            </div>)
            }
            
        </div>

                }
            
        </div>
    );
};

export default PopularClasses;