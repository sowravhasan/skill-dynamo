import Lottie from "lottie-react";
import learn from "../../../public/learn.json"
import { Link } from "react-router-dom";
import { MdVideoLibrary } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
import CountUp from 'react-countup';



const ExtraInfo = () => {
    return (
        <div className="max-w-6xl mx-auto py-20 px-5 md:px-0">
        <div className="flex items-center gap-5 mb-7">
                <div className="bg-blue-400 h-8 w-1 rounded-md"></div>
                <h1 className="bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent font-bold text-3xl md:text-4xl">What to notice about us</h1>
                </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 rounded-xl w-full">
            
            <div className="grid grid-cols-2 gap-8 px-7">
                <div className="bg-blue-900 p-3 rounded-md">
                    <div className="flex justify-center items-center"><PiStudentBold className="text-6xl font-bold text-blue-400 text-center"></PiStudentBold></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Total Students</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={2000} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><MdVideoLibrary className="text-6xl font-bold text-blue-400 text-center"></MdVideoLibrary></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Total Classes</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={999} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><FaPercent className="text-6xl mb-2 font-bold text-blue-400 text-center"></FaPercent></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Success Rate</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={89} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><FaUsers className="text-6xl font-bold text-blue-400 text-center"></FaUsers></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Total User</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={3068} duration={5}/>+</p>
                </div>
            </div>

            <div className="w-full">
            <Lottie animationData={learn}></Lottie>
            </div>
        </div>
    </div>
    );
};

export default ExtraInfo;