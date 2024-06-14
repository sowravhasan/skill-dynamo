import bannerAnimation from "../../../public/Animation - 1700764047896.json"
import Lottie from "lottie-react";
import { TiTick } from "react-icons/ti";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import Typewriter from "typewriter-effect";

const Banner = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="max-w-6xl mx-auto py-10 md:py-0">
 <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-0">
            <div>
            {user? <div className="mb-8"><h1 className="text-5xl md:text-6xl font-bold md:leading-[4rem] text-gray-100">Welcome Back- <br /> <span className="bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent">{user?.displayName}</span> <br /></h1>
            <span className="text-3xl text-gray-100 font-semibold">Are you ready for your next mission..?</span></div>
            :

                <h1 className="text-3xl md:text-6xl font-bold leading-[3rem] md:leading-[4rem] text-gray-100 mb-5">Upgrade Your <br /> Skills Up To <br /> <span className=" text-blue-500">
                    <Typewriter
            options={{
              strings: ["Superhero Level!", "Exalted Mastery!"],
              autoStart: true,
              loop: true,
            }}
          />
                    
                    </span> </h1>}
                <p className="text-white mb-5">Elevate your expertise. Empowering learners with dynamic courses, personalized paths, and hands-on projects. Unlock your potential, acquire new skills, and thrive in a future driven by continuous learning.</p>
                
                <div className="flex items-center">
                <input className="rounded-l-md border border-blue-400  bg-gray-200 px-3 h-12 text-sm focus:outline-none focus:border-blue-600 transition duration-300 ease-in-out w-7/12 hover:border-rose-300" type="text"  placeholder="Which skill are you looking for?" />
                <button className="text-white bg-gradient-to-r from-sky-500 to-sky-800 font-semibold  rounded-r-md h-12 px-6">Explore More</button>
                </div>

                <div className="flex gap-20 mt-7">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-sky-500 to-sky-800 text-white text-xl w-8 h-8 rounded-full flex justify-center items-center">
                        <TiTick></TiTick>
                    </div>
                    <p className="text-gray-100">Free All Class Notes</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-sky-500 to-sky-800 text-white text-xl w-8 h-8 rounded-full flex justify-center items-center">
                        <TiTick></TiTick>
                    </div>
                    <p className="text-gray-100">30 Days Free Trial</p>
                </div>
                </div>
            </div>

            <div className="w-11/12">
                <Lottie animationData={bannerAnimation}></Lottie>
            </div>
        </div>
        </div>
       
    );
};

export default Banner;