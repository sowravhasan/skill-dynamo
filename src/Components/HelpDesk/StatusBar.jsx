import { Link } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FcIdea } from "react-icons/fc";
import { LuSaveAll } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";

const StatusBar = () => {
  return (
    <div>
      <div className="bg-blue-900 p-3 rounded-md">
        
        <Link className="p-2 rounded-md bg-blue-950 flex items-center justify-between border border-blue-500 hover:bg-teal-950 transition duration-300 mb-4">
          <Link className="flex items-center gap-3">
            <IoDocumentTextOutline className="text-xl text-blue-400"></IoDocumentTextOutline>
            <p className="text-gray-200 font-semibold text-base">
              All Post
            </p>
          </Link>
          <p className="text-gray-50 font-semibold">333</p>
        </Link>
        
        <Link className="p-2 rounded-md bg-blue-950 flex items-center justify-between border border-blue-500 hover:bg-teal-950 transition duration-300 mb-4">
          <Link className="flex items-center gap-3">
            <MdOutlineFeaturedPlayList className="text-xl text-blue-400"></MdOutlineFeaturedPlayList>
            <p className="text-gray-200 font-semibold text-base">
              Feature Post
            </p>
          </Link>
          <p className="text-gray-50 font-semibold">333</p>
        </Link>
        
        <Link className="p-2 rounded-md bg-blue-950 flex items-center justify-between border border-blue-500 hover:bg-teal-950 transition duration-300 mb-4">
          <Link className="flex items-center gap-3">
            <IoAnalyticsSharp className="text-xl text-blue-400"></IoAnalyticsSharp>
            <p className="text-gray-200 font-semibold text-base">
              Improvements
            </p>
          </Link>
          <p className="text-gray-50 font-semibold">333</p>
        </Link>
        
        <Link className="p-2 rounded-md bg-blue-950 flex items-center justify-between border border-blue-500 hover:bg-teal-950 transition duration-300 mb-4">
          <Link className="flex items-center gap-3">
            <FaRegLightbulb className="text-xl text-blue-400"></FaRegLightbulb>
            <p className="text-gray-200 font-semibold text-base">
                Suggestions
            </p>
          </Link>
          <p className="text-gray-50 font-semibold">333</p>
        </Link>
        
        <Link className="p-2 rounded-md bg-blue-950 flex items-center justify-between border border-blue-500 hover:bg-teal-950 transition duration-300 mb-4">
          <Link className="flex items-center gap-3">
            <LuSaveAll className="text-xl text-blue-400"></LuSaveAll>
            <p className="text-gray-200 font-semibold text-base">
                Saved Post
            </p>
          </Link>
          <p className="text-gray-50 font-semibold">333</p>
        </Link>
        
        <Link className="p-2 rounded-md bg-blue-950 flex items-center justify-between border border-blue-500 hover:bg-teal-950 transition duration-300 mb-4">
          <Link className="flex items-center gap-3">
            <FaRegBookmark className="text-xl text-blue-400"></FaRegBookmark>
            <p className="text-gray-200 font-semibold text-base">
                Bookmarked
            </p>
          </Link>
          <p className="text-gray-50 font-semibold">333</p>
        </Link>
      </div>
    </div>
  );
};

export default StatusBar;
