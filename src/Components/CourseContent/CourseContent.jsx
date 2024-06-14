import { PiStudentBold } from "react-icons/pi";
import { MdVideoLibrary } from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import { GrCubes } from "react-icons/gr";
import { FaVideo } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { MdOutlineBadge } from "react-icons/md";


const CourseContent = () => {
    return (
        <div className="max-w-6xl mx-auto py-20 px-5 md:px-0">
            <div>
            <div className="flex items-center gap-5 mb-7">
                <div className="bg-blue-400 h-14 w-1 rounded-md"></div>
                <div>
                <h1 className="bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent font-bold text-3xl md:text-4xl">Live Course Content</h1>
                <p className="text-gray-300">View what you will get after joining us:</p>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 border-2 border-blue-400 rounded-lg">
                        <div className="flex justify-center items-center"><MdVideoLibrary className="text-9xl font-bold text-blue-400 text-center mb-2"></MdVideoLibrary></div>
                            <h1 className="text-2xl font-semibold text-gray-200 text-center mb-2">Interactive Live Class</h1>
                            <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eveniet obcaecati minus? Cumque, nam tempora nesciunt distinctio neque laudantium labore.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 border-2 border-blue-100 rounded-lg">
                        <div className="flex justify-center items-center"><IoBarChartOutline className="text-9xl font-bold text-blue-400 text-center mb-2"></IoBarChartOutline></div>
                            <h1 className="text-2xl font-semibold text-gray-200 text-center mb-2">Progress Planing And Trcking</h1>
                            <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eveniet obcaecati minus? Cumque, nam tempora nesciunt distinctio neque laudantium labore.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 border-2 border-blue-400 rounded-lg">
                        <div className="flex justify-center items-center"><GrCubes className="text-9xl font-bold text-blue-400 text-center mb-2"></GrCubes></div>
                            <h1 className="text-2xl font-semibold text-gray-200 text-center mb-2">Module Based Study Plan</h1>
                            <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eveniet obcaecati minus? Cumque, nam tempora nesciunt distinctio neque laudantium labore.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 border-2 border-blue-100 rounded-lg">
                        <div className="flex justify-center items-center"><FaVideo className="text-9xl font-bold text-blue-400 text-center mb-2"></FaVideo></div>
                            <h1 className="text-2xl font-semibold text-gray-200 text-center mb-2">Industry Focused Live Courses</h1>
                            <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eveniet obcaecati minus? Cumque, nam tempora nesciunt distinctio neque laudantium labore.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 border-2 border-blue-400 rounded-lg">
                        <div className="flex justify-center items-center"><PiCertificateBold className="text-9xl font-bold text-blue-400 text-center mb-2"></PiCertificateBold></div>
                            <h1 className="text-2xl font-semibold text-gray-200 text-center mb-2">Job Placement Support</h1>
                            <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eveniet obcaecati minus? Cumque, nam tempora nesciunt distinctio neque laudantium labore.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-950 via-blue-950 to-blue-950 p-4 border-2 border-blue-100 rounded-lg">
                        <div className="flex justify-center items-center"><MdOutlineBadge className="text-9xl font-bold text-blue-400 text-center mb-2"></MdOutlineBadge></div>
                            <h1 className="text-2xl font-semibold text-gray-200 text-center mb-2">Learn From Experts</h1>
                            <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eveniet obcaecati minus? Cumque, nam tempora nesciunt distinctio neque laudantium labore.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseContent;