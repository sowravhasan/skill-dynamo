import { TbLogout2 } from "react-icons/tb";
import { BiLogIn } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";


const PostDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium "
        onClick={toggleDropdown}
      >
        <BsThreeDots className="text-blue-400 text-2xl"></BsThreeDots>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-blue-950 ring-1 ring-black ring-opacity-5 transition duration-300 opacity-100 border-2 border-blue-400 z-30">
          <div className='flex flex-col px-4 py-5'>
                    <Link to={"/userDashboard/teacherDashboard"} className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mb-2 border-b border-blue-900 pb-1">Save Post</Link> 

                    <Link to={"/userDashboard/teacherDashboard"} className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mb-2 border-b border-blue-900 pb-1">Edit Post</Link> 

                    <Link to={"/helpDesk"} className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mb-2 border-b border-blue-900 pb-1">Mark as Featured</Link> 
                    <Link className='text-gray-200 hover:text-blue-400 transition duration-300 text-base font-semibold z-30'>Bookmark</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDropDown;