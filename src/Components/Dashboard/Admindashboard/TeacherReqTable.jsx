import { RiDeleteBack2Fill } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import Swal from "sweetalert2";

const TeacherReqTable = ({user, refetch}) => {
    const {firstName, title, email, status,category, experience, image} = user;
    const axiosSecure = useAxiosSecure();


  //   const handleDeleteUser = user => {
  //     console.log(user);
  //     Swal.fire({
  //         title: "Are you sure?",
  //         text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!"
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //             axiosSecure.delete(`/instructors/${user._id}`)
  //             .then(res => {
  //                 if(res.data.deletedCount > 0){
  //                   refetch();
  //                     Swal.fire({
  //                         title: "Deleted!",
  //                         text: "Your file has been deleted.",
  //                         icon: "success"
  //                       });
  //                 }
  //             })
            
  //         }
  //       });
  // }


  const handleApproveRequest = user => {
    axiosSecure.patch(`/instructors/${user._id}`)
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

  const handleRejectRequest = user => {
    axiosSecure.patch(`/instructors/rejected/${user._id}`)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0){
          refetch();
            Swal.fire({
                icon: "success",
                title: `${user.firstName}has been rejected`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}



    return (
        <div className="">
           <div className="">
  <table className="table text-gray-200">
    {/* head */}
    <thead>
      <tr className="text-blue-400 text-sm">
        <th>No</th>
        <th>Name & Image</th>
        <th>Title</th>
        <th>Favorite Color</th>
        <th>Category</th>
        <th>Experience</th>
        <th>Status</th>
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
        <td>
          {title}
        </td>
        <td>{email}</td>
        <td>{category}</td>
        <td>{experience}</td>
        <td>{user.role === "teacher" ? "Accepted" : status}</td>
        <th className="z-10">
        <details className="dropdown">
  <summary className="m-1 btn btn-sm bg-blue-900 text-gray-200 border-none hover:bg-blue-700"><BsThreeDots className="text-lg"></BsThreeDots></summary>
  
  <ul className="p-3 shadow menu dropdown-content bg-base-100 rounded-box w-32 z-10">
    <button onClick={() => handleApproveRequest(user)} className="flex items-center gap-4 mb-4"><FcApproval className="text-xl"></FcApproval><p className="text-green-600">Approve</p></button>


    <button onClick={() => handleRejectRequest(user)} className="flex items-center gap-4"><RiDeleteBack2Fill className="text-xl text-rose-600"></RiDeleteBack2Fill><p className="text-rose-600">Reject</p></button>
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

export default TeacherReqTable;