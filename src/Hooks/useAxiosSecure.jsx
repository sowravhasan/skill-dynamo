import axios from "axios";

const axiosUser = axios.create({
    baseURL: 'https://skill-dynamo-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosUser;
};

export default useAxiosSecure;