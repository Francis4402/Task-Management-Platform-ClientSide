import axios from "axios";

const axisPublic = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})
const UseAxiosPublic = () => {
    return axisPublic;
};

export default UseAxiosPublic;