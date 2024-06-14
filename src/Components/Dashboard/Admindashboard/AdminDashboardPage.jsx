import CountUp from 'react-countup';
import { FaPercent, FaUsers } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { IoMdNotificationsOutline } from 'react-icons/io';


const AdminDashboardPage = () => {

    const axiosSecure = useAxiosSecure()
    const { data: classes =[] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
         const res = await axiosSecure.get('/allClasses');
        return res.data
     } 
    })

    const {data: teachers =[] } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
         const res = await axiosSecure.get('/instructors');
        return res.data
     } 
    })

    const {data: users =[] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
         const res = await axiosSecure.get('/users');
        return res.data
     } 
    })
    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-gray-200 font-semibold">All registered users</p>
            </div>
            <IoMdNotificationsOutline className="text-4xl font-bold text-blue-400"></IoMdNotificationsOutline>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>


            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 rounded-xl w-full">
            
            <div className="grid grid-cols-2 gap-8 px-7">
                <div className="bg-blue-900 p-3 rounded-md">
                    <div className="flex justify-center items-center"><PiStudentBold className="text-6xl font-bold text-blue-400 text-center"></PiStudentBold></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Total Students</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={2000} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><MdVideoLibrary className="text-6xl font-bold text-blue-400 text-center"></MdVideoLibrary></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Total Classes</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={classes.length} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><FaPercent className="text-6xl mb-2 font-bold text-blue-400 text-center"></FaPercent></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Success Rate</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={89} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><FaUsers className="text-6xl font-bold text-blue-400 text-center"></FaUsers></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Total User</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={users.length} duration={5}/>+</p>
                </div>


               

                
            </div>
        </div>


            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 rounded-xl w-full">
            
            <div className="grid grid-cols-2 gap-8 px-7">
            <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><FaUsers className="text-6xl font-bold text-blue-400 text-center"></FaUsers></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">All Teachers</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={12} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><FaUsers className="text-6xl font-bold text-blue-400 text-center"></FaUsers></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Teacher Request</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={teachers.length} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><FaUsers className="text-6xl font-bold text-blue-400 text-center"></FaUsers></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Total User</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={3068} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><FaUsers className="text-6xl font-bold text-blue-400 text-center"></FaUsers></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Manage Data</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={3068} duration={5}/>+</p>
                </div>
            </div>
        </div>



            </div>
        </div>
    );
};

export default AdminDashboardPage;