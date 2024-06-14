import Lottie from "lottie-react";
import ani from "./../../../public/ani.json"

const Loading = () => {
    return (
        <div>
            <div className="w-96">
                <Lottie animationData={ani}></Lottie>
            </div>
        </div>
    );
};

export default Loading;