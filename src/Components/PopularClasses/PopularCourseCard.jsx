import { FaHouseUser, FaUsersSlash, FaVideo } from "react-icons/fa";


const PopularCourseCard = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="relative bg-gray-700 border-2 border-blue-400 rounded-lg">
                <img className=" w-full mb-4" src="/src/assets/images/popular classes/programming-background-with-person-working-with-codes-computer.jpg" alt="" />
                <div className="absolute left-3 top-3 bg-gradient-to-r from-sky-500 to-sky-800 p-2 rounded-md">
                    <p className="text-gray-200 font-semibold">$200</p>
                </div>
                <h1 className=" px-3 bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent text-xl font-bold mb-2">Web Development</h1>
                <p className="text-gray-200 mb-3 px-3">Lorem ipsum dolor sit amet consectetur adiiores mollitia quia ipsa dignissimos alias?</p>

               
               <div className="flex items-center gap-3 px-3 mb-3">
               <div className="bg-gradient-to-r from-sky-500 to-sky-800 text-gray-200 text-xl p-2 rounded-full">
                <FaHouseUser></FaHouseUser>
                </div>
                <p className="text-gray-200">Rahul SD <span className="text-xs text-blue-400">(Instructor)</span></p>
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
                <p className="text-gray-200 font-semibold">Total Enrollment: 6</p>
             </div>

            <div className="px-3 py-3">
            <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-800 w-full rounded-md">Enroll Now</button>
            </div>
             

            </div>
        </div>
    );
};

export default PopularCourseCard;