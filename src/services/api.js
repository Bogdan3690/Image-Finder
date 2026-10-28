import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/?key=55780203-b9342a3abc65fec10912162f5";

export const fetchImages = async (query) => {
       const resp = await axios.get("&q=" + query);
    //    return resp.data.hits
}