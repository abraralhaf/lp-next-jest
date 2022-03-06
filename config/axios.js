import axios from "axios";

const axiosFetch = axios.create({
    
    baseURL: 'https://api-song-lyrics.herokuapp.com/',
    params: {key: '484129036', locale: 'id-ID'},
    headers:{
          }
});

export default axiosFetch;