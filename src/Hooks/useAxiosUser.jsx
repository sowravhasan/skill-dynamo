import axios from "axios";



const axiosUser = axios.create({
    baseURL: 'https://skill-dynamo-server.vercel.app'
})

const useAxiosUser = () => {
    return axiosUser;
};

export default useAxiosUser;