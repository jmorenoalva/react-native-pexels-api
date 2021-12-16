import axios from "axios";

export const getImages = async (searchTerm='programming')=>
  await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers:{
      Authorization: "",
    },
  });