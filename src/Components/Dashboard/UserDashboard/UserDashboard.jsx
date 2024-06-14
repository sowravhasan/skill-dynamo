import { Link, NavLink, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaVideo, FaChartLine } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserDashboard = () => {
  const [users, setUsers] = useState({});
  const { user } = useContext(AuthContext);
  const url = `https://skill-dynamo-server.vercel.app/users?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.map((i) => setUsers(i)));
  }, [url]);

  return (
    <div className="flex gap-10">
      <div className="bg-blue-900 w-96 h-screen">
        <div className="flex items-center gap-3 mb-14 border-b border-blue-400 shadow-lg py-2">
          <img
            className="w-24"
            src="https://i.ibb.co/MpNzNfK/skill-dynamo-logo.png"
            alt=""
          />
          <h1 className="text-2xl font-bold text-blue-400">Skill Dynamo</h1>
        </div>

        {users?.role == "Student" && (
          <div className="px-10">
            <Link
              to="/"
              className="flex items-center gap-3 mb-7"
            >
              <IoHomeSharp className="text-2xl text-blue-400"></IoHomeSharp>
              <p className="text-gray-200 font-semibold text-xl">
                Home
              </p>
            </Link>
            <NavLink
              to="/userDashboard/studentDashboard"
              className="flex items-center gap-3 mb-7"
            >
              <IoHomeSharp className="text-2xl text-blue-400"></IoHomeSharp>
              <p className="text-gray-200 font-semibold text-xl">
                Dashboard
              </p>
            </NavLink>
            <NavLink
              to="/userDashboard/myEnrolledClass"
              className="flex items-center gap-3 mb-7"
            >
              <IoHomeSharp className="text-2xl text-blue-400"></IoHomeSharp>
              <p className="text-gray-200 font-semibold text-xl">
                My Enrolled Class
              </p>
            </NavLink>
            <NavLink
              to="/userDashboard/profile"
              className="flex items-center gap-3 mb-7"
            >
              <FaVideo className="text-2xl text-blue-400"></FaVideo>
              <p className="text-gray-200 font-semibold text-xl">My Profile</p>
            </NavLink>
            <NavLink
              to="/userDashboard/cart"
              className="flex items-center gap-3 mb-7"
            >
              <FaCartArrowDown className="text-2xl text-blue-400"></FaCartArrowDown>
              <p className="text-gray-200 font-semibold text-xl">My Cart</p>
            </NavLink>
            <NavLink
              to="/userDashboard/paymentHistory"
              className="flex items-center gap-3 mb-7"
            >
              <LuHistory className="text-2xl text-blue-400"></LuHistory>
              <p className="text-gray-200 font-semibold text-xl">Payment History</p>
            </NavLink>
          </div>
        )}

        {users?.role == "Instructor" && (
          <div className="px-10">
             <Link
              to="/"
              className="flex items-center gap-3 mb-7"
            >
              <IoHomeSharp className="text-2xl text-blue-400"></IoHomeSharp>
              <p className="text-gray-200 font-semibold text-xl">
                Home
              </p>
            </Link>
             <NavLink
              to="/userDashboard/teacherDashboard"
              className="flex items-center gap-3 mb-7"
            >
              <FaVideo className="text-2xl text-blue-400"></FaVideo>
              <p className="text-gray-200 font-semibold text-xl">Dashboard</p>
            </NavLink>
            <NavLink
              to="/userDashboard/myClass"
              className="flex items-center gap-3 mb-7"
            >
              <FaVideo className="text-2xl text-blue-400"></FaVideo>
              <p className="text-gray-200 font-semibold text-xl">My Classes</p>
            </NavLink>
            <NavLink
              to="/userDashboard/addClass"
              className="flex items-center gap-3 mb-7"
            >
              <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
              <p className="text-gray-200 font-semibold text-xl">Add Class</p>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-7">
              <FaChartLine className="text-2xl text-blue-400"></FaChartLine>
              <p className="text-gray-200 font-semibold text-xl">Statistics</p>
            </NavLink>
            <NavLink to="/userDashboard/profile" className="flex items-center gap-3 mb-7">
              <FaCircleUser className="text-2xl text-blue-400"></FaCircleUser>
              <p className="text-gray-200 font-semibold text-xl">My Profile</p>
            </NavLink>
          </div>
        )}

        {users?.role == "admin" && (
          <div className="px-10">
            <Link
              to="/"
              className="flex items-center gap-3 mb-7"
            >
              <IoHomeSharp className="text-2xl text-blue-400"></IoHomeSharp>
              <p className="text-gray-200 font-semibold text-xl">
                Home
              </p>
            </Link>
            <NavLink  to="/userDashboard/adminDashboardPage" className="flex items-center gap-3 mb-7">
              <IoHomeSharp className="text-2xl text-blue-400"></IoHomeSharp>
              <p className="text-gray-200 font-semibold text-xl">Dashboard</p>
            </NavLink>
            <NavLink
              to="/userDashboard/allClass"
              className="flex items-center gap-3 mb-7"
            >
              <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
              <p className="text-gray-200 font-semibold text-xl">All Classes</p>
            </NavLink>
            <NavLink
              to="/userDashboard/teacherRequest"
              className="flex items-center gap-3 mb-7"
            >
              <FaVideo className="text-2xl text-blue-400"></FaVideo>
              <p className="text-gray-200 font-semibold text-xl">
                Teacher Request
              </p>
            </NavLink>
            <NavLink
              to="/userDashboard/allUsers"
              className="flex items-center gap-3 mb-7"
            >
              <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
              <p className="text-gray-200 font-semibold text-xl">All Users</p>
            </NavLink>
            <NavLink
              to="/userDashboard"
              className="flex items-center gap-3 mb-7"
            >
              <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
              <p className="text-gray-200 font-semibold text-xl">
                All Teachers
              </p>
            </NavLink>
            <NavLink
              to="/userDashboard/addClass"
              className="flex items-center gap-3 mb-7"
            >
              <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
              <p className="text-gray-200 font-semibold text-xl">
                Support Sessions
              </p>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-7">
              <FaChartLine className="text-2xl text-blue-400"></FaChartLine>
              <p className="text-gray-200 font-semibold text-xl">Statistics</p>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-7">
              <FaCircleUser className="text-2xl text-blue-400"></FaCircleUser>
              <p className="text-gray-200 font-semibold text-xl">Profile</p>
            </NavLink>
          </div>
        )}

        {/* {
                    users.map((user) => {
                        console.log(user.role);
                        return user?.role == "Student" ?
                        <div className="px-10">
                    <NavLink className="flex items-center gap-3 mb-7">
                        <IoHomeSharp className="text-2xl text-blue-400"></IoHomeSharp>
                        <p className="text-gray-200 font-semibold text-xl">My Enrolled Class</p>
                    </NavLink>
                    <NavLink to="/userDashboard/" className="flex items-center gap-3 mb-7">
                        <FaVideo className="text-2xl text-blue-400"></FaVideo>
                        <p className="text-gray-200 font-semibold text-xl">My Profile</p>
                    </NavLink>
                </div>
                :
                <div className="px-10">
                    <NavLink className="flex items-center gap-3 mb-7">
                        <IoHomeSharp className="text-2xl text-blue-400"></IoHomeSharp>
                        <p className="text-gray-200 font-semibold text-xl">Dashboard</p>
                    </NavLink>
                    <NavLink to="/userDashboard/myClass" className="flex items-center gap-3 mb-7">
                        <FaVideo className="text-2xl text-blue-400"></FaVideo>
                        <p className="text-gray-200 font-semibold text-xl">My Classes</p>
                    </NavLink>
                    <NavLink to="/userDashboard/addClass" className="flex items-center gap-3 mb-7">
                        <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
                        <p className="text-gray-200 font-semibold text-xl">Add Class</p>
                    </NavLink>
                    <NavLink className="flex items-center gap-3 mb-7">
                        <FaChartLine className="text-2xl text-blue-400"></FaChartLine>
                        <p className="text-gray-200 font-semibold text-xl">Statistics</p>
                    </NavLink>
                    <NavLink className="flex items-center gap-3 mb-7">
                        <FaCircleUser className="text-2xl text-blue-400"></FaCircleUser>
                        <p className="text-gray-200 font-semibold text-xl">My Profile</p>
                    </NavLink>
                </div>

                    })
                } */}

        {/* <div className="px-10">
                    <NavLink className="flex items-center gap-3 mb-7">
                        <IoHomeSharp className="text-2xl text-blue-400"></IoHomeSharp>
                        <p className="text-gray-200 font-semibold text-xl">Dashboard</p>
                    </NavLink>
                    <NavLink to="/userDashboard/allClass" className="flex items-center gap-3 mb-7">
                        <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
                        <p className="text-gray-200 font-semibold text-xl">All Classes</p>
                    </NavLink>
                    <NavLink to="/userDashboard/teacherRequest" className="flex items-center gap-3 mb-7">
                        <FaVideo className="text-2xl text-blue-400"></FaVideo>
                        <p className="text-gray-200 font-semibold text-xl">Teacher Request</p>
                    </NavLink>
                    <NavLink to="/userDashboard/allUsers" className="flex items-center gap-3 mb-7">
                        <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
                        <p className="text-gray-200 font-semibold text-xl">All Users</p>
                    </NavLink>
                    <NavLink to="/userDashboard/addClass" className="flex items-center gap-3 mb-7">
                        <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
                        <p className="text-gray-200 font-semibold text-xl">All Teachers</p>
                    </NavLink>
                    <NavLink to="/userDashboard/addClass" className="flex items-center gap-3 mb-7">
                        <RiVideoAddFill className="text-2xl text-blue-400"></RiVideoAddFill>
                        <p className="text-gray-200 font-semibold text-xl">Support Sessions</p>
                    </NavLink>
                    <NavLink className="flex items-center gap-3 mb-7">
                        <FaChartLine className="text-2xl text-blue-400"></FaChartLine>
                        <p className="text-gray-200 font-semibold text-xl">Statistics</p>
                    </NavLink>
                    <NavLink className="flex items-center gap-3 mb-7">
                        <FaCircleUser className="text-2xl text-blue-400"></FaCircleUser>
                        <p className="text-gray-200 font-semibold text-xl">Profile</p>
                    </NavLink>
                </div> */}

      </div>

      <div className="w-full px-10 py-7">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserDashboard;
