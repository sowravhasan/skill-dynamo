import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";import { FaDownload } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./Pdf";
import 'react-loading-skeleton/dist/skeleton.css'
import Lottie from "lottie-react";
import loading from "../../../../../public/loading.json"
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Paymenthistory = () => {
  const [totalPayments, setTotalPayments] = useState([]);
  const [searchValue, setSearchValue] = useState('');
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { isPending:isLoading, data: payments =[] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
         const res = await axiosSecure.get(`/payments?email=${user?.email}`);
         setTotalPayments(res.data)
        return res.data
     } 
    })



    
              // search functionality

              const handleInputChange = (e) => {
                setSearchValue(e.target.value);
              };
        
        
        
              const handleSearch = () => {
                const filtered = totalPayments.filter((data) =>
                  data.instructorName.toLowerCase().includes(searchValue.toLowerCase())
                );
              
                setTotalPayments(filtered);
              };
             // ------------ Search End----------------

    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div>
                <h1 className="text-3xl font-bold text-white">Total Payments : {totalPayments.length}</h1>
                <p className="text-gray-200 font-semibold">Your payment data.</p>
            </div>

            <PDFDownloadLink document={<Pdf></Pdf>} fileName="My-Payment-History">
            <button className="bg-blue-700 hover:bg-blue-800 transition duration-300 p-2 rounded-md">
                
                <h1 className="text-gray-200 flex items-center gap-4 font-bold text-lg flex-row-reverse">Download your payment history <FaDownload className="text-4xl font-bold text-blue-300"></FaDownload></h1>
                </button>
                </PDFDownloadLink>
            
        </div>


        <div className="relative flex justify-center mb-10">
        <input value={searchValue} onChange={handleInputChange} className="border-2 border-blue-400 p-2 bg-gray-800 rounded-md w-1/2 text-gray-200" placeholder="Search by date or course title" type="text" />
           <button onClick={handleSearch} className="text-3xl text-blue-400 absolute right-64 top-1.5"><IoSearch ></IoSearch></button>
        </div>



        <table className="bg-blue-900 rounded-b-xl pb-4 table text-gray-200">
        <thead>
      <tr className="text-blue-400 text-sm">
        <th>No</th>
        <th>Instructor Name & Email</th>
        <th>Course Title</th>
        <th>Price</th>
        <th>Date</th>
        <th>Transaction Id</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    {
      isLoading? <div className="flex justify-center items-center h-screen">
      <div className="w-96">
      <Lottie animationData={loading}></Lottie>
      </div>
  </div>
  :
  
  totalPayments.map((item, index) => <tbody key={item._id}>
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
            <div className="text-sm text-gray-400">{item.email}</div>
          </div>
        </div>
      </td>
      <td>{item.courseTitle}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
      <td>{item.transactionId}</td>
      <td>{item.status}</td>
      <th className="z-10">
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
        </div>
    );
};

export default Paymenthistory;