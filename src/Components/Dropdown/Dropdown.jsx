import { TbLogout2 } from "react-icons/tb";
import { BiLogIn } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";


const Dropdown = () => {
    const {logout, user} = useContext(AuthContext);
    console.log(user);
    const handleLogout = () => {
      logout()
      .then(result => {
        console.log(result.user);
      })
      .then(error => {
        console.log(error);
      })
    }
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log(user);

    const [newUsers, setNewUsers] = useState({});
    const url = `https://skill-dynamo-server.vercel.app/users?email=${user?.email}`;
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => data.map((i) => setNewUsers(i)));
    }, [url]);



  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium "
        onClick={toggleDropdown}
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-sky-500 to-sky-800 text-gray-200 text-2xl">
                        {
                            user?.photoURL ? <img src={user?. photoURL} alt="" /> :  <FaUser className="text-xl text-gray-200"></FaUser>
                        }
                       
                    </div>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-blue-950 ring-1 ring-black ring-opacity-5 transition duration-300 opacity-100 border-2 border-blue-400 z-30">
          <div className='flex flex-col px-4'>
            <div className='flex justify-center border-b-2 border-blue-400 pb-2 mt-5'>
              <div>
              <div className='flex justify-center'>
              <FaUserCircle className='text-5xl mb-2 text-blue-400'></FaUserCircle>
              </div>
              <h1 className='text-xl font-bold text-gray-200'>{user?.displayName}</h1>
              </div>
            </div>
            {
                      newUsers?.role == "Student" && <Link to={"/userDashboard/studentDashboard"} className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mt-7 mb-2 border-b border-blue-900 pb-1">Dashboard</Link> 
                    }
                    {
                      newUsers?.role == "admin" && <Link to={"/userDashboard/adminDashboardPage"} className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mt-7 mb-2 border-b border-blue-900 pb-1">Dashboard</Link> 
                    }
                    
                    {
                      newUsers?.role == "Instructor" && <Link to={"/userDashboard/teacherDashboard"} className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mt-7 mb-2 border-b border-blue-900 pb-1">Dashboard</Link> 
                    }

                    <Link to={"/userDashboard/teacherDashboard"} className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mb-2 border-b border-blue-900 pb-1">Student Analysis</Link> 

                    <Link to={"/userDashboard/teacherDashboard"} className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mb-2 border-b border-blue-900 pb-1">Anouncement</Link> 

                    <Link to={"/helpDesk"} className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mb-2 border-b border-blue-900 pb-1">Help Desk</Link> 


                    
            {user? <Link onClick={handleLogout} className='text-gray-200 hover:text-blue-400 transition duration-300 mb-4 text-base font-semibold z-30 flex items-center gap-3'>Logout <TbLogout2 className="text-xl"></TbLogout2></Link> :
            <Link onClick={"/login"} className='text-gray-200 hover:text-blue-400 transition duration-300 mb-4 text-base font-semibold z-30 flex items-center gap-3'>Login <BiLogIn className="text-xl"></BiLogIn></Link>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
