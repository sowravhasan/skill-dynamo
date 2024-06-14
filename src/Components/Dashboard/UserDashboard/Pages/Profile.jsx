import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);
  return (
    <div>
      <div>
        <div className="flex justify-center border-b-2 border-blue-400 pb-2 mt-5">
          <div>
            <div className="flex justify-center">
                
                {
                    user?.photoURL ? <div className="mb-2 border border-blue-400 w-40 h-40 rounded-full flex justify-center items-center">
                    <img className="w-32" src={user?.photoURL} alt="" />
                </div> : <FaUserCircle className="text-9xl mb-2 text-blue-400"></FaUserCircle>
                }
                
              
            </div>
            <h1 className="text-3xl font-bold text-gray-200">
              Rahul Sutradhar
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-10 mt-10">
        <div className="flex items-center gap-5">
        <FaUserCircle className="text-4xl text-blue-400"></FaUserCircle>
          <div className="relative h-11 w-auto">
            <input
                defaultValue={user.displayName}
              required
              type="text"
              className="bg-[#35326e] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
              placeholder="Name"
              name="firstName"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
        <FaRegEnvelope className="text-4xl text-blue-400"></FaRegEnvelope>
          <div className="relative h-11 w-auto">
            <input 
                defaultValue={user.email}
              required
              type="text"
              className="bg-[#35326e] peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
              placeholder="Email"
              name="firstName"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
