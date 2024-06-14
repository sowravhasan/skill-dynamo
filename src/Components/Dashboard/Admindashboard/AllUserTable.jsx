import { RiDeleteBack2Fill } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import Swal from "sweetalert2";

const AllUserTable = ({user, refetch}) => {
    const {firstName, title, email, status,category, experience, image} = user;
    const axiosSecure = useAxiosSecure();


    



    return (
        <div className="">
           <div className="">
  <table className="table text-gray-200">
    {/* head */}
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
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <p className="text-gray-200">1</p>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{firstName}</div>
              <div className="text-sm text-gray-400">Bangladesh</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>{user.role}</td>
        <th className="z-10">
        <details className="dropdown">
  <summary className="m-1 btn btn-sm bg-blue-900 text-gray-200 border-none hover:bg-blue-700"><BsThreeDots className="text-lg"></BsThreeDots></summary>
  
  <ul className="p-3 shadow menu dropdown-content bg-base-100 rounded-box w-40 z-10">
    <button onClick={() => handleApproveRequest(user)} className="flex items-center gap-4 mb-4"><FcApproval className="text-xl"></FcApproval><p className="text-green-600">Make Admin</p></button>


    <button onClick={() => handleRejectRequest(user)} className="flex items-center gap-4"><RiDeleteBack2Fill className="text-xl text-rose-600"></RiDeleteBack2Fill><p className="text-rose-600">Delete</p></button>
  </ul>
</details>
        </th>
      </tr>
    
   

    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllUserTable;