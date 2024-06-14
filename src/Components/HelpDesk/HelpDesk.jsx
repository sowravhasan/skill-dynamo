import { IoSearch } from "react-icons/io5";
// import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import CreatePost from "./CreatePost";
import StatusBar from "./StatusBar";
import AllPost from "./AllPost";

const HelpDesk = () => {
  return (
    <div className="pt-10 max-w-7xl mx-auto">
      {/* <Navbar></Navbar> */}
      <div className="flex justify-between items-center items-center bg-blue-900 rounded-md p-3 mb-10">
      <div className="flex items-center gap-5">
      <div className="flex items-center gap-3">
            <img
              className="w-24"
              src="https://i.ibb.co/MpNzNfK/skill-dynamo-logo.png"
              alt=""
            />
            <h1 className="text-2xl font-bold text-blue-400">Skill Dynamo</h1>
          </div>
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <input
            className="border-2 border-blue-400 p-2 bg-gray-800 rounded-md w-full text-gray-200"
            placeholder="Search......"
            type="text"
          />
          <button className="text-2xl text-blue-400 absolute left-40">
            <IoSearch></IoSearch>
          </button>
        </div>
      </div>

        <div className="flex items-center gap-10 col-span-2">
          <Link className="flex items-center gap-3">
            <FiHome className="text-xl text-blue-400"></FiHome>
            <p className="text-gray-200 font-semibold text-base   ">
              Homepage
            </p>
          </Link>
          <Link className="flex items-center gap-3">
            <FaPeopleGroup className="text-xl text-blue-400"></FaPeopleGroup>
            <p className="text-gray-200 font-semibold text-base   ">
              Connections
            </p>
          </Link>
          <Link className="flex items-center gap-3">
            <RiMessage2Line className="text-xl text-blue-400"></RiMessage2Line>
            <p className="text-gray-200 font-semibold text-base   ">
              Message
            </p>
          </Link>
          <Link className="flex items-center gap-3">
            <MdOutlineNotificationsActive className="text-xl text-blue-400"></MdOutlineNotificationsActive>
            <p className="text-gray-200 font-semibold text-base   ">
              Notification
            </p>
          </Link>
          <Link className="flex items-center gap-3">
            <VscTools className="text-xl text-blue-400"></VscTools>
            <p className="text-gray-200 font-semibold text-base   ">
              Tools
            </p>
          </Link>
        </div>
      </div>


      <div className="grid grid-cols-3 gap-10">
        {/* Create Post Section */}
        <div className="col-span-2">
            <div className="bg-blue-900 p-6 rounded-md mb-10">
                <CreatePost></CreatePost>
            </div>
            <div className="bg-blue-900 p-6 rounded-md">
                <AllPost></AllPost>
            </div>
        </div>
        <StatusBar></StatusBar>
      </div>



    </div>
  );
};

export default HelpDesk;
