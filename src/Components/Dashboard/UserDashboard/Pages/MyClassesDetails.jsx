import CountUp from "react-countup";
import { FaPercent } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";
import { MdOutlineAssignment } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const MyClassesDetails = () => {
  const allClassesDetails = useLoaderData();
  const { _id, title } = allClassesDetails;
  console.log(title);

  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    const assignmentTitle = e.target.assignmentTitle.value;
    const assignmentDeadline = e.target.assignmentDeadline.value;
    const assignmentDescription = e.target.assignmentDescription.value;

    const allData = {
      assignmentTitle,
      assignmentDeadline,
      assignmentDescription,
    };

    const toastId = toast.loading("Adding Assignment...");

    fetch(`https://skill-dynamo-server.vercel.app/allClasses/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Assignment Submited Successfully.", { id: toastId });
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="flex items-center gap-5 mb-7">
        <div className="bg-blue-400 h-8 w-1 rounded-md"></div>
        <h1 className="bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent font-bold text-4xl">
          Class Progress
        </h1>
      </div>
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 rounded-xl w-full">
        <div className="grid grid-cols-2 gap-8 px-7">
          <div className="bg-blue-900 p-3 rounded-md">
            <div className="flex justify-center items-center">
              <PiStudentBold className="text-6xl font-bold text-blue-400 text-center"></PiStudentBold>
            </div>
            <h1 className="text-xl font-semibold text-gray-200 text-center">
              Total Enrollment
            </h1>
            <p className="text-blue-400 text-center text-lg font-semibold">
              <CountUp end={2000} duration={5} />+
            </p>
          </div>
          <div className="bg-blue-900 p-3 rounded-md">
            <div className="flex justify-center items-center">
              <MdOutlineAssignment className="text-6xl font-bold text-blue-400 text-center"></MdOutlineAssignment>
            </div>
            <h1 className="text-xl font-semibold text-gray-200 text-center">
              Total Assignment
            </h1>
            <p className="text-blue-400 text-center text-lg font-semibold">
              <CountUp end={999} duration={5} />+
            </p>
          </div>
          <div className="bg-blue-900 p-3 rounded-md">
            <div className="flex justify-center items-center">
              <FaPercent className="text-5xl mb-2 font-bold text-blue-400 text-center"></FaPercent>
            </div>
            <h1 className="text-xl font-semibold text-gray-200 text-center">
              Success Rate
            </h1>
            <p className="text-blue-400 text-center text-lg font-semibold">
              <CountUp end={89} duration={5} />+
            </p>
          </div>
          <div className="bg-blue-900 p-3 rounded-md">
            <div className="flex justify-center items-center">
              <MdAssignmentTurnedIn className="text-6xl font-bold text-blue-400 text-center"></MdAssignmentTurnedIn>
            </div>
            <h1 className="text-xl font-semibold text-gray-200 text-center">
              Assignment Submited
            </h1>
            <p className="text-blue-400 text-center text-lg font-semibold">
              <CountUp end={3068} duration={5} />+
            </p>
          </div>
        </div>
        <div className="px-3 py-3 mt-10 flex justify-center">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-800 rounded-md w-full text-center"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add Assignment
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-gradient-to-r from-blue-900 via-blue-900 to-blue-950">
              <h3 className="font-bold text-lg text-blue-400 mb-6">
                Add Assignment
              </h3>
              <form onSubmit={handleSubmitAssignment}>
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative h-11 w-full">
                    <input
                      required
                      type="text"
                      className="bg-[#25235f] border border-blue-400 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                      placeholder=" "
                      name="assignmentTitle"
                    />
                    <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Title
                    </label>
                  </div>
                  <div className="relative h-11 w-full">
                    <input
                      required
                      type="date"
                      className="bg-[#25235f] border border-blue-400 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                      placeholder=" "
                      name="assignmentDeadline"
                    />
                  </div>
                </div>

                <div className="relative h-32 w-full mt-7">
                  <input
                    required
                    type="text"
                    className="bg-[#25235f] border border-blue-400 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-300"
                    placeholder=" "
                    name="assignmentDescription"
                  />
                  <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Description
                  </label>
                </div>
                <div className="flex flex-row-reverse items-center gap-9">
                  <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-sky-600 to-sky-800 rounded-md w-full text-center mt-5">
                    Add Assignment
                  </button>

                  <div className="modal-action">
                    <form method="dialog" className="flex gap-10 w-full">
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MyClassesDetails;
