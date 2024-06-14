import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const { data: cart =[] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
         const res = await axiosSecure.get(`/cart?email=${user?.email}`);
        return res.data
     } 
    })
    return [cart]
};

export default useCart;