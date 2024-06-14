import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
// import { RiDeleteBin2Fill } from "react-icons/ri";
// import { FaUser } from "react-icons/fa";


const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
    const axiosSecure = useAxiosSecure()
    const {refetch, data: users =[] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
         const res = await axiosSecure.get('/users');
         setAllUsers(res.data)
        return res.data
     } 
    })



    const handleDeleteUser = user => {
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "User removed successfully.",
                            icon: "success"
                          });
                    }
                })
              
            }
          });
    }


const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0){
          refetch();
            Swal.fire({
                icon: "success",
                title: `${user.firstName}has been appointed as new admin`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}



            // search functionality

            const handleInputChange = (e) => {
              setSearchValue(e.target.value);
            };
      
      
      
            const handleSearch = () => {
              const filtered = allUsers.filter((data) =>
                data.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
                data.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            
              setAllUsers(filtered);
            };
           // ------------ Search End----------------
    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-white">All Users : {allUsers.length}</h1>
                <p className="text-gray-200 font-semibold">All registered users</p>
            </div>
            <input value={searchValue} onChange={handleInputChange} className="border-2 border-blue-400 p-2 bg-gray-800 rounded-md w-1/2 text-gray-200" placeholder="Find data by title & email" type="text" />
           <button onClick={handleSearch} className="text-3xl text-blue-400 absolute right-12"><IoSearch ></IoSearch></button>
        </div>



        <table className="bg-blue-900 rounded-b-xl pb-4 table text-gray-200">
        <thead>
      <tr className="text-blue-400 text-sm">
        <th>No</th>
        <th>Name & Image</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
                {
                    allUsers.map((user, index) => <tbody key={user._id}>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <p className="text-gray-200">{index + 1}</p>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={user.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{user.firstName}</div>
                            <div className="text-sm text-gray-400">Bangladesh</div>
                          </div>
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.adminRole === "admin" ? "Admin" : user.role}</td>
                      <th className="z-10">
                      <details className="dropdown">
                <summary className="m-1 btn btn-sm bg-blue-500 text-gray-200 border-none hover:bg-blue-700"><BsThreeDots className="text-lg"></BsThreeDots></summary>
                
                <ul className="p-3 shadow menu dropdown-content bg-base-100 rounded-box w-40 z-10">
                  <button onClick={() => handleMakeAdmin(user)} className="flex items-center gap-4 mb-4"><FcApproval className="text-xl"></FcApproval><p className="text-green-600">Make Admin</p></button>
              
              
                  <button onClick={() => handleDeleteUser(user)} className="flex items-center gap-4"><RiDeleteBack2Fill className="text-xl text-rose-600"></RiDeleteBack2Fill><p className="text-rose-600">Delete</p></button>
                </ul>
              </details>
                      </th>
                    </tr>
                  
                 
              
                  </tbody>)
                }
            </table>
        </div>
    );
};

export default AllUsers;