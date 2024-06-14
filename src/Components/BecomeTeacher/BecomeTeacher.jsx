import Lottie from "lottie-react";
import teacher from "../../../public/teacher.json"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const BecomeTeacher = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
  
      const [users, setUsers] = useState({});
      const url = `https://skill-dynamo-server.vercel.app/users?email=${user?.email}`;
    
      useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.map((i) => setUsers(i)));
      }, [url]);
    return (
        <div>
            {
            users?.role == "Instructor" ? '' : <div className="max-w-6xl mx-auto py-20 px-5 md:px-0">
            <div className="flex items-center gap-5 mb-7">
                    <div className="bg-blue-400 h-8 w-1 rounded-md"></div>
                    <h1 className=" bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent font-bold text-3xl md:text-4xl">Join as an instructor to start teaching</h1>
                    </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 rounded-xl w-full">
                <div className="w-full">
                <Lottie animationData={teacher}></Lottie>
                </div>

                <div>
                    <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent mb-3 md:mb-5">Become an instructor!!</h1>
                    <p className="text-gray-200 mb-8">Embark on a transformative journey as an instructor, guiding learners worldwide. Unleash your expertise, craft compelling courses, and foster a vibrant community of knowledge seekers. Join a platform that values your insights, empowering you to shape minds, enrich lives, and contribute to a global education revolution.</p>
                    <Link to={"/becomeTeacherForm"} className="bg-gradient-to-r from-sky-500 to-sky-800 px-6 py-3 rounded-lg text-white font-semibold">Join Now</Link>
                </div>
            </div>
        </div>
        }
        </div>
    );
};

export default BecomeTeacher;