import { BsThreeDots } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";


const MyEnrolledClassDetails = () => {
    return (
<div>
            <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-white">Assignment Info</h1>
                <p className="text-gray-200 font-semibold">Complete your assignment</p>
            </div>
            <IoMdNotificationsOutline className="text-4xl font-bold text-blue-400"></IoMdNotificationsOutline>
        </div>



        <table className="bg-blue-900 rounded-b-xl pb-4 table text-gray-200">
        <thead>
      <tr className="text-blue-400 text-sm">
        <th>Assignment No</th>
        <th>Assignment Title</th>
        <th>Assignment Description</th>
        <th>Assignment Deadline</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <p className="text-gray-200"></p>
                      </th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <th className="z-10">
                      <button className="text-gray-200 bg-blue-700 hover:bg-blue-800 transition duration-300 p-3 rounded-md">Submit Assignment</button>
                      </th>
                    </tr>
                  
                 
              
                  </tbody>
                
            </table>
        </div>
    );
};

export default MyEnrolledClassDetails;