import { FaPercent } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import CountUp from 'react-countup';
import { IoMdNotificationsOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const TeacherDashboard = () => {
    const [myClass, setMyClass] = useState([]);
    const {user} = useContext(AuthContext);
    const  url = `https://skill-dynamo-server.vercel.app/allClasses?email=${user?.email}`
    console.log(myClass);

    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyClass(data)
            })
    }, [url])



    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-gray-200 font-semibold"></p>
            </div>
            <IoMdNotificationsOutline className="text-4xl font-bold text-blue-400"></IoMdNotificationsOutline>
        </div>


            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 rounded-xl w-full">
            
            <div className="grid grid-cols-2 gap-8 px-7">
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><MdVideoLibrary className="text-6xl font-bold text-blue-400 text-center"></MdVideoLibrary></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">My Submited Classes</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={myClass.length} duration={5}/>+</p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                <div className="flex justify-center items-center"><FaPercent className="text-6xl mb-2 font-bold text-blue-400 text-center"></FaPercent></div>
                    <h1 className="text-xl font-semibold text-gray-200 text-center">Success Rate</h1>
                    <p className="text-blue-400 text-center text-lg font-semibold"><CountUp end={95} duration={5}/>+</p>
                </div>
                
            </div>
           
        </div>
        </div>
    );
};

export default TeacherDashboard;