import useAxiosUser from "../../../Hooks/useAxiosUser";
import { useQuery } from "@tanstack/react-query";
// import { RiDeleteBin2Fill } from "react-icons/ri";
// import { FaUser } from "react-icons/fa";
import TeacherReqTable from "./TeacherReqTable";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";


const TeacherRequest = () => {
    const [allTeachers, setAllteachers] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const axiosUser = useAxiosUser()
    const {refetch, data: teachers =[] } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
         const res = await axiosUser.get('/instructors');
         setAllteachers(res.data)
        return res.data
     } 
    })

                // search functionality

                const handleInputChange = (e) => {
                    setSearchValue(e.target.value);
                  };
            
            
            
                  const handleSearch = () => {
                    const filtered = allTeachers.filter((data) =>
                      data.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
                      data.category.toLowerCase().includes(searchValue.toLowerCase())
                    );
                  
                    setAllteachers(filtered);
                  };
                 // ------------ Search End----------------



    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4">
            <div>
                <h1 className="text-3xl font-bold text-white">Teacher Request</h1>
                <p className="text-gray-200 font-semibold">View teacher request</p>
            </div>
            <input value={searchValue} onChange={handleInputChange} className="border-2 border-blue-400 p-2 bg-gray-800 rounded-md w-1/2 text-gray-200" placeholder="Find data by name & category" type="text" />
           <button onClick={handleSearch} className="text-3xl text-blue-400 absolute right-12"><IoSearch ></IoSearch></button>
        </div>



        <div className="py-10">
            <div className="text-blue-400 grid grid-cols-4 mb-10">
            <h1 className="text-3xl font-semibold">Total Requests: {allTeachers.length}</h1>
            </div>



            <div>
                
                {
                    allTeachers.map(user => <TeacherReqTable key={user._id} user={user} refetch={refetch}></TeacherReqTable>)
                }
            </div>
        </div>
        </div>
    );
};

export default TeacherRequest;