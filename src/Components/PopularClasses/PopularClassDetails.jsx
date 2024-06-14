import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaUsersCog } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoPricetagsSharp } from "react-icons/io5";
import Lottie from "lottie-react";
import anouncement from "../../../public/anouncement.json";
import CountUp from "react-countup";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const PopularClassDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const allPopularClass = useLoaderData();
  console.log(allPopularClass);
  const {
    _id,
    title,
    instructorName,
    price,
    email,
    image,
    description,
    assignmentTitle,
    assignmentDeadline,
    assignmentDescription,
  } = allPopularClass;
  console.log(allPopularClass);
  console.log(assignmentTitle);

  const handleAddToCart = (food) => {
    console.log(food);
    const cartItems = {
      menuId: _id,
      email: user.email,
      instructorName,
      title,
      price,
      image,
      assignmentTitle,
      assignmentDeadline,
      assignmentDescription,
    };
    const toastId = toast.loading("Adding to cart...");
    axiosSecure.post("/cart", cartItems).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Added successfully.", { id: toastId });
      }
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto py-10">
        <div className="bg-gray-700 p-10 grid grid-cols-2 gap-10 items-center rounded-xl">
          <div className="">
            <div className="flex items-center">
              <div className="w-40">
                <Lottie animationData={anouncement}></Lottie>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent">
                {title}
              </h1>
            </div>

            <p className="text-gray-200 mb-5 text-justify">{description}</p>

            <p className="bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent mb-3 text-xl font-bold">
              Course Info :
            </p>

            <div className="grid grid-cols-3 gap-5 border-t border-x border-blue-400">
              <div className=" p-3 border-r-2 border-blue-400 flex items-center gap-3 justify-center">
                <FaRegUserCircle className="text-2xl text-blue-400"></FaRegUserCircle>
                <p className="text-gray-200">Instructor Name</p>
              </div>
              <div className=" p-3 border-r-2 border-blue-400 flex items-center gap-3 justify-center">
                <MdOutlineMail className="text-2xl text-blue-400"></MdOutlineMail>
                <p className="text-gray-200">Instructor Email</p>
              </div>
              <div className=" p-3 border-r-2 border-blue-400 flex items-center gap-3 justify-center">
                <FaUsersCog className="text-2xl text-blue-400"></FaUsersCog>
                <p className="text-gray-200">Total Enrollment</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 border border-blue-400">
              <div className=" p-3 border-r-2 border-blue-400 flex justify-center">
                <p className="text-gray-200">{instructorName}</p>
              </div>
              <div className=" p-3 border-r-2 border-blue-400 flex justify-center">
                <p className="text-gray-200">{email}</p>
              </div>
              <div className=" p-3 border-r-2 border-blue-400 flex justify-center">
                <p className="text-blue-400 text-center text-lg font-semibold">
                  <CountUp end={89} duration={5} />+
                </p>
              </div>
            </div>

            <div className="flex items-center gap-20 py-3">
              <div className="flex items-center gap-4">
                <IoPricetagsSharp className="text-3xl text-blue-400"></IoPricetagsSharp>
                <h1 className="text-2xl font-bold text-gray-200">$ {price}</h1>
              </div>

              <div className="px-3 py-3 flex justify-center">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  data-tip="Intro video"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  className="flex items-center gap-3 tooltip"
                >
                  <MdOutlineOndemandVideo className="text-4xl font-bold text-blue-400"></MdOutlineOndemandVideo>
                  <p className="text-gray-200 text-2xl font-bold">
                    Course Intro Video
                  </p>
                </button>

                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box bg-gradient-to-r from-blue-900 via-blue-900 to-blue-950">
                    <h3 className="font-bold text-lg text-blue-400 mb-6">
                      Watch Intro Video
                    </h3>

                    <div className="border border-blue-400 rounded-md">
                      <video controls src="/public/bgVideo.mp4"></video>
                    </div>
                    <form>
                      <div className="">
                        <div className="modal-action">
                          <form method="dialog" className="flex gap-10 w-full">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="text-gray-200 font-semibold px-4 py-2 border border-blue-400 rounded-md w-full text-center">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </form>

                    <div className="modal-action hidden">
                      <form method="dialog" className="flex gap-10 w-full">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="text-gray-200 font-semibold px-4 py-2 border border-blue-400 rounded-md w-full text-center">
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>

              {/* <div className="flex items-center gap-3 mb-3">
                <MdOutlineOndemandVideo className="text-4xl font-bold text-blue-400"></MdOutlineOndemandVideo>
                <p className="text-gray-200 text-3xl font-bold">Course Intro Video</p>
                </div> */}
            </div>

            <button
              onClick={() => handleAddToCart(_id)}
              className="text-gray-200 font-semibold px-7 py-3 bg-gradient-to-r from-sky-500 to-sky-800 rounded-md"
            >
              Add To Cart
            </button>
          </div>

          <div className="border border-blue-400 rounded-lg">
            <img className=" w-full rounded-lg" src={image} alt="" />
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default PopularClassDetails;