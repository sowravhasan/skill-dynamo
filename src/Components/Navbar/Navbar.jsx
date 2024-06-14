import { Link } from "react-router-dom";
import ThemeToggle from "../Toggle/Toggle";
import Drawer from "../Drawer/Drawer";
import Dropdown from "../Dropdown/Dropdown";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [newUsers, setNewUsers] = useState({});
  const url = `https://skill-dynamo-server.vercel.app/users?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.map((i) => setNewUsers(i)));
  }, [url]);

  return (
    <div className="px-5 shadow-lg border-b border-blue-700 md:shadow-none md:border-none sticky top-0 z-50 bg-gradient-to-r from-blue-950 via-blue-950 to-black">
      <div className="flex justify-between">
        <div className="flex items-center gap-5 md:gap-20">
        <Drawer></Drawer>
          <div className="flex items-center gap-3">
            <img
              className="w-24"
              src="https://i.ibb.co/MpNzNfK/skill-dynamo-logo.png"
              alt=""
            />
            <h1 className="text-2xl font-bold text-blue-400">Skill Dynamo</h1>
          </div>
          

          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              to={"/"}
              className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold"
            >
              Home
            </Link>
            <Link
              to={"/allClasses"}
              className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold"
            >
              All Clases
            </Link>
            <Link
              to={"/"}
              className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold"
            >
              About Us
            </Link>
            {user ? (
              <div className="flex gap-8">
                <div className="px-3 flex justify-center">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Support
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box bg-gradient-to-r from-blue-900 via-blue-900 to-blue-950">
                      <h3 className="font-bold text-lg text-blue-400 mb-6">
                        Support Session
                      </h3>
                      <form>
                        <div className="relative h-32 w-full mt-7">
                          <input
                            required
                            type="text"
                            className="bg-[#25235f] border border-blue-400 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                            placeholder=" "
                            name="assignmentDescription"
                          />
                          <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Enter your question in details
                          </label>
                        </div>
                        <div className="flex flex-row-reverse items-center gap-9">
                          <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-600 to-sky-800 rounded-md w-full text-center mt-5">
                            Join Now
                          </button>

                          <div className="modal-action">
                            <form
                              method="dialog"
                              className="flex gap-10 w-full"
                            >
                              {/* if there is a button in form, it will close the modal */}
                              <button className="text-gray-200 font-semibold px-4 py-2 border border-blue-400 rounded-md w-full text-center">
                                Cancel
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
              </div>
            ) : (
              ""
            )}
            <Link
              to={"/blogs"}
              className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold"
            >
              Blog
            </Link>
            <Link
              to="faq"
              className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold"
            >
              FAQ
            </Link>
            {newUsers?.role == "Student" && (
              <Link
                to={"/userDashboard/studentDashboard"}
                className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold"
              >
                Dashboard
              </Link>
            )}
            {newUsers?.role == "admin" && (
              <Link
                to={"/userDashboard/adminDashboardPage"}
                className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold"
              >
                Dashboard
              </Link>
            )}

            {newUsers?.role == "Instructor" && (
              <Link
                to={"/userDashboard/teacherDashboard"}
                className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center gap-9">
          <div className="flex items-center gap-5">
            <ThemeToggle></ThemeToggle>
            {!user ? (
              <div className="hidden md:flex items-center gap-5">
                <Link
                  to={"/login"}
                  className="bg-gradient-to-r from-sky-500 to-sky-800 px-6 py-2 text-white font-semibold rounded-tr-2xl rounded-bl-2xl"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="bg-gradient-to-r from-sky-500 to-sky-800 px-4 py-2 text-white font-semibold rounded-tr-2xl rounded-bl-2xl"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              ""
            )}

            {/* <Button>Sign up</Button> */}

            <Dropdown></Dropdown>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
