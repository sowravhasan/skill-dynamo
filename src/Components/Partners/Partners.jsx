import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className="max-w-6xl mx-auto px-5 md:px-0">
            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 p-4 rounded-xl w-full">
                    <div className="flex items-center gap-2">
                    <div className="bg-blue-400 h-6 w-1 rounded-md"></div>
                    <h1 className=" bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent font-bold text-xl">Our Honourable Partners</h1>
                    </div>
            <Marquee>
                <div className="flex items-center gap-20">
                    <img className="w-40" src="https://i.ibb.co/LPGcdLR/1.png" alt="" />
                    <img className="w-40" src="https://i.ibb.co/k19sdxX/2.png" alt="" />
                    <img className="w-40" src="https://i.ibb.co/N6FvbH6/3.png" alt="" />
                    <img className="w-40" src="https://i.ibb.co/Q6wCYgM/4.png" />
                    <img className="w-40" src="https://i.ibb.co/CKFRZQS/5.png" />
                    <img className="w-40" src="https://i.ibb.co/WKqjR8P/6.png" />
                    <img className="w-40" src="https://i.ibb.co/C2kwpcK/7.png" />
                    <img className="w-40" src="https://i.ibb.co/2YmmGWC/8.png" />
                    <img className="w-40" src="https://i.ibb.co/j6wZCyB/9.png" />
                    <img className="w-40" src="https://i.ibb.co/5RFcLns/10.png" />
                    <img className="w-40" src="https://i.ibb.co/gSnLXTD/11.png" />
                </div>
            </Marquee>
            </div>
        </div>
    );
};

export default Partners;