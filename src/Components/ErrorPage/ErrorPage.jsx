import Lottie from "lottie-react";
import errorPage from "../../../public/errorPage.json"

const ErrorPage = () => {
    return (
        <div>
            <div className="w-full">
                <Lottie animationData={errorPage}></Lottie>

            </div>
        </div>
    );
};

export default ErrorPage;