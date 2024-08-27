import axios from "axios";
import { endpoint } from "./endpoint";

export async function getBlogs (adminId){
    try {
        const blogs = await axios.get (`${endpoint.blogEndpoint}/${adminId}/get`);
        console.log ("url: ", `${endpoint.blogEndpoint}/${adminId}/get`);
        return blogs.data;
    } catch (error) {
        console.log("Getting blog error");        
        throw error;
    }
}