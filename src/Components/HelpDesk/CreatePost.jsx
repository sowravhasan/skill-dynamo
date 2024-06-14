import { LuSmilePlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOff } from "react-icons/ci";
import { FaImages, FaUnlink } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosUser from "../../Hooks/useAxiosUser";


const CreatePost = () => {
    const axiosUser = useAxiosUser();
    const {user} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        
        const data = {
            title, 
            description,
            userName: user?.displayName,
            photoURL: user?.photoURL,

        }
        console.log(data);
        const toastId = toast.loading("Posting...");
        axiosUser.post("/helpDeskPost", data)
          .then((res) => {
            console.log(res.data);

            if (res.data.insertedId) {
              toast.success("Post added successfully.", { id: toastId });
            }
      })
      .catch((error) => console.log(error))
    }
  return (
    <div>
        <div className="flex items-center gap-4 border-b-2 border-blue-500 pb-4">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      {/* <div className="bg-blue-950 rounded-2xl p-3 flex justify-between items-center w-full">
        <p className="text-gray-400 font-semibold">What's on your mind?</p>
        <LuSmilePlus className="text-gray-400 text-xl"></LuSmilePlus>
      </div> */}



                
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="w-full"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    <div className="bg-blue-950 rounded-2xl p-3 flex justify-between items-center w-full">
        <p className="text-gray-400 font-semibold">What's on your mind?</p>
        <LuSmilePlus className="text-gray-400 text-xl"></LuSmilePlus>
      </div>

                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box bg-gradient-to-r from-blue-900 via-blue-900 to-blue-950">
                      <h3 className="font-bold text-lg text-blue-400 mb-6">
                        Create Post
                      </h3>
                      <form onSubmit={handleSubmit}>
                        
                        <div className="mb-4">
                            <p className="text-gray-50 mb-2">Title</p>
                        <input
                        className="border border-blue-400 p-2 bg-gray-800 rounded-md w-full text-gray-200"
                        placeholder="Title..."
                        type="text"
                        name="title"/>
                        </div>

                        <div className="">
                            <p className="text-gray-50 mb-2">Description</p>
                        <textarea cols={20} rows={10}
                        className="border border-blue-400 p-2 bg-gray-800 rounded-md w-full text-gray-200"
                        placeholder="Description..."
                        type="text"
                        name="description"/>
                        </div>

                        <Link className="flex items-center gap-3">
            <FaImages className="text-xl text-blue-400"></FaImages>
            <p className="text-gray-200 font-semibold text-base   ">
              Image / Video
            </p>
          </Link>

                        <div className="flex flex-row-reverse items-center gap-9">
                          <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-600 to-sky-800 rounded-md w-full text-center mt-5">
                            Submit Post
                          </button>

                          <div className="modal-action">
                            <form
                              method="dialog"
                              className="flex gap-10 w-full"
                            >
                              {/* if there is a button in form, it will close the modal */}
                              <button className="text-gray-200 font-semibold px-4 py-2 border border-blue-400 rounded-md w-full text-center">
                                Discard
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

    <div className="flex justify-between mt-5">
    <div className="flex items-center gap-10">
          <Link className="flex items-center gap-3">
            <CiImageOn className="text-xl text-blue-400"></CiImageOn>
            <p className="text-gray-200 font-semibold text-base   ">
              Image
            </p>
          </Link>
          <Link className="flex items-center gap-3">
            <CiVideoOff className="text-xl text-blue-400"></CiVideoOff>
            <p className="text-gray-200 font-semibold text-base   ">
              Video
            </p>
          </Link>
          <Link className="flex items-center gap-3">
            <FaUnlink className="text-xl text-blue-400"></FaUnlink>
            <p className="text-gray-200 font-semibold text-base   ">
              Attachment
            </p>
          </Link>
          <Link className="flex items-center gap-3">
            <FaHashtag className="text-xl text-blue-400"></FaHashtag>
            <p className="text-gray-200 font-semibold text-base   ">
              Hashtag
            </p>
          </Link>
        </div>
        <Link className="flex flex-row-reverse items-center gap-3">
            <FaAngleDown className="text-xl text-blue-400"></FaAngleDown>
            <p className="text-gray-200 font-semibold text-base   ">
              Public
            </p>
          </Link>
    </div>
    </div>
  );
};

export default CreatePost;
