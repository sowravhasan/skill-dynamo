import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";
import loading from "../../../public/loading.json"
import Lottie from "lottie-react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { FaUserNurse } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


const Blogs = () => {
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const [blogs, setBlogs] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const {count} = useLoaderData();
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()]



    // const pages = [];
    // for(let i = 0; i < numberOfPages; i++){
    //   pages.push(i)
    // }

  //   useEffect( () => {
  //     setTimeout(() => {
  //         fetch('https://skill-dynamo-server.vercel.app/blogs')
  //         .then(res => res.json())
  //         .then(data => {
  //             setBlogs(data)
  //             setIsLoading(false)
  //         })
  //     }, 2000)
  // }, [])
    

    useEffect( () => {
        setTimeout(() => {
            fetch(`https://skill-dynamo-server.vercel.app/blogs?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setIsLoading(false)
            })
        }, 2000)
    }, [currentPage, itemsPerPage])








// Pagination functionality
    const handleItemsPerPage = e => {
      const val = parseInt(e.target.value);
      setItemsPerPage(val);
      setCurrentPage(0);
    }


    const handlePrevPage = () => {
      if(currentPage > 0){
        setCurrentPage(currentPage - 1)
      }
    }

    const handleNextPage = () => {
      if(currentPage < pages.length -1 ){
        setCurrentPage(currentPage + 1)
      }
    }
    // ------------ Pagination End----------------


          // search functionality

          const handleInputChange = (e) => {
            setSearchValue(e.target.value);
          };
    
    
    
          const handleSearch = () => {
            const filtered = blogs.filter((data) =>
              data.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setBlogs(filtered);
          };
         // ------------ Search End----------------

    return (
        <div>
            

            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto py-10 px-5 md:px-0">
            <div className="relative flex flex-col md:flex-row items-center justify-between border-b-2 border-blue-400 pb-4 mb-10">
            <div className="flex items-center gap-4 mb-5 md:mb-0">
                <FaBlog className="text-4xl text-blue-400"></FaBlog>
                <h1 className="text-3xl font-bold text-white">Recent Blogs</h1>
            </div>
           <input value={searchValue} onChange={handleInputChange} className="border-2 border-blue-400 p-2 bg-gray-800 rounded-md w-full md:w-1/2 text-gray-200" placeholder="Find class" type="text" />
           <button onClick={handleSearch} className="text-2xl text-blue-400 absolute right-3 top-16 md:top-2.5 md:right-3"><IoSearch ></IoSearch></button>
        </div>
            {
                isLoading ? <div className="flex justify-center items-center h-screen">
                <div className="w-96">
                <Lottie animationData={loading}></Lottie>
                </div>
            </div> : <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {
                             blogs.map(blog => <div key={blog._id}>
                                 <div className="relative bg-gray-700 border-2 border-blue-400 rounded-lg">
                                     <div className="p-3 border-b border-blue-500">
                                     <img className=" w-full h-72 mb-4" src={blog.img} alt="" />
                                     </div>
                                     <div className="absolute left-0 top-0 rounded-br-xl bg-gradient-to-r from-sky-500 to-sky-800 p-2">
                                         <p className="text-gray-200 font-semibold">$ {blog.category}</p>
                                     </div>
                                     <h1 className=" px-3 bg-gradient-to-br from-sky-500  to-sky-600 bg-clip-text text-transparent text-xl font-bold mb-2 mt-2">{blog.title}</h1>
                                     <p className="text-gray-200 mb-3 px-3">{blog.description}</p>

                                     <hr />
                     
                                    
                                  <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-3 px-3 mb-3 mt-3">
                                    <FaUserNurse className="text-blue-400 text-xl"></FaUserNurse>
                                     <p className="text-gray-200">{blog.author}</p>
                                    </div>
                     
                                    
                                    <div className="flex items-center gap-3 px-3 mb-3 mt-3">
                                    <SlCalender className="text-blue-400 text-xl"></SlCalender>
                                     <p className="text-gray-200">{blog.published_date}</p>
                                    </div>
                                  </div>
                                   
                     
                                 <div className="px-3 py-3 w-full">
                                 <Link to={`/allClassesDetails/${blog._id}`}>
                                 <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-800 rounded-md w-full">Read More</button>
                                 </Link>
                                 </div>
                                  
                     
                                 </div>
                             </div>)
                         }
             </div>
            }


<div className="flex justify-center py-10">
            <button onClick={handlePrevPage} className="mr-5 rounded-md focus:outline-none py-2 px-3 text-center bg-blue-700 text-white font-semibold hover:bg-blue-600 transition duration-300">
                Previous
            </button>
                {
                  pages.map(page => <button 
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? 'mr-5 rounded-md focus:outline-none py-2 px-3 text-center bg-gradient-to-r from-sky-500 to-sky-800 text-white font-semibold hover:bg-blue-600 transition duration-300' : 'mr-5 rounded-md focus:outline-none py-2 px-3 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300' } key={page}>{page}</button>)
                }

                <button onClick={handleNextPage} className="mr-5 rounded-md focus:outline-none py-2 px-3 text-center bg-blue-700 text-white font-semibold hover:bg-blue-600 transition duration-300">
                 Next
            </button>
                <select className="rounded-md bg-gradient-to-r from-sky-500 to-sky-800 text-gray-200" value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                
            </div>

            {/* {
              pages.map(page => <button key={page} className="text-gray-200 text-3xl">{page}</button>)
            } */}



            </div>
        </div>
        
    );
};

export default Blogs;