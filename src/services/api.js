import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchImages = async (query) => {
  try {
    const resp = await axios.get("", {
      params: {
        key: "55780203-b9342a3abc65fec10912162f5",
        q: query,
      },
    });

    return resp.data.hits;
    
  } catch (error) {
    console.log(error);
  }
};