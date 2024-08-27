import axios from "axios";
import { endpoint } from "./endpoint";

export async function getCourse (adminId){
    try {
        const blogs = await axios.get (`${endpoint.courseEndpoint}/${adminId}/get`);
        console.log ("url: ", `${endpoint.courseEndpoint}/${adminId}/get`);
        return blogs.data;
    } catch (error) {
        console.log("Getting blog error");        
        throw error;
    }
}