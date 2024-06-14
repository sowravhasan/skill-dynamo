
import { useQuery } from "@tanstack/react-query";
import useAxiosUser from "./useAxiosUser";


const usePopularCourse = () => {
    const axiosUser = useAxiosUser();
    
    const {refetch,isPending:isLoading, data: popularCourse =[] } = useQuery({
        queryKey: ['popularCourse'],
        queryFn: async () => {
         const res = await axiosUser.get('/popularCourse');
        return res.data
     } 
    })


    return [popularCourse, isLoading,refetch]
};

export default usePopularCourse;