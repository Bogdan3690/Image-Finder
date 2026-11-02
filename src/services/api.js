import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchImages = async (query) => {
    const resp = await axios.get("", {
      params: {
        key: "55780203-b9342a3abc65fec10912162f5",
        q: query,
        page: 1,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal'
      },
    });

    return resp.data
    

};