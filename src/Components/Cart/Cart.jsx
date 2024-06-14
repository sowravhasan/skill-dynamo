import { RiDeleteBack2Fill } from "react-icons/ri";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Cart = () => {
    const {user} = useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const axiosSecure = useAxiosSecure()
    const {refetch, data: cart =[] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
         const res = await axiosSecure.get(`/cart?email=${user?.email}`);
         setCarts(res.data)
        return res.data
     } 
    })

    const handleDeleteUser = cart => {
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
              axiosSecure.delete(`/cart/${cart._id}`)
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

    const totalPrice = carts.reduce((total, item) => total + item.price, 0)


    
          // search functionality

          const handleInputChange = (e) => {
            setSearchValue(e.target.value);
          };
    
    
    
          const handleSearch = () => {
            const filtered = carts.filter((data) =>
              data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              data.instructorName.toLowerCase().includes(searchValue.toLowerCase())
            );
          
            setCarts(filtered);
          };
         // ------------ Search End----------------
    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-white">Total Class : {carts.length}</h1>
                <p className="text-gray-200 font-semibold">Your cart items.</p>
            </div>
            <input value={searchValue} onChange={handleInputChange} className="border-2 border-blue-400 p-2 bg-gray-800 rounded-md w-1/2 text-gray-200" placeholder="Find class" type="text" />
           <button onClick={handleSearch} className="text-3xl text-blue-400 absolute right-12"><IoSearch ></IoSearch></button>
        </div>



        <table className="bg-blue-900 rounded-b-xl pb-4 table text-gray-200">
        <thead>
      <tr className="text-blue-400 text-sm">
        <th>No</th>
        <th>Instructor Name & Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
                {
                    carts.map((item, index) => <tbody key={item._id}>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <p className="text-gray-200">{index + 1}</p>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.instructorName}</div>
                            <div className="text-sm text-gray-400">Bangladesh</div>
                          </div>
                        </div>
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.status}</td>
                      <th className="z-10">
                      <button onClick={() => handleDeleteUser(item)} className="flex items-center gap-2 mb-4 bg-blue-700 p-3 hover:bg-blue-800 transition duration-300 rounded-md"><RiDeleteBack2Fill className="text-xl text-blue-400"></RiDeleteBack2Fill><p className="text-gray-200">Delete Item</p></button>
                      {/* <details className="dropdown">
                <summary className="m-1 btn btn-sm bg-blue-500 text-gray-200 border-none hover:bg-blue-700"><BsThreeDots className="text-lg"></BsThreeDots></summary>
                
                <ul className="-ml-10 p-3 shadow menu dropdown-content bg-base-100 rounded-box w-40 z-10">
              
              
                  

                </ul>
              </details> */}
                      </th>
                    </tr>
                  
                 
              
                  </tbody>)
                }
            </table>

            <div className="flex justify-end">
                <div className="py-10 w-1/3">
                <div className="bg-blue-900 border border-blue-400 rounded-lg p-4">
                    <p className="text-blue-400 text-xl font-semibold mb-3">Subtotal : $ 100 </p>
                    <p className="text-blue-400 text-xl font-semibold border-b border-blue-300 pb-3 mb-3">Extra : $ 00 </p>
                    <p className="text-blue-400 text-xl font-semibold border-b border-blue-300 pb-3">Total : $ <span className="text-blue-300">{totalPrice}</span> </p>

                    <div className="mt-7">
                    <Link to="/userDashboard/payment" className="text-gray-200 font-semibold px-7 py-3 bg-gradient-to-r from-sky-500 to-sky-800 rounded-md mt-6">Pay Now</Link>
                    </div>

                </div>
            </div>

            </div>
        </div>
    );
};

export default Cart;