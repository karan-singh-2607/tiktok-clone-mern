import axios from 'axios'

const instanse = axios.create({
    baseURL: 'https://tiktok-clone-mern--backend.herokuapp.com/',
});

export default instanse;