import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '591a02484a9d0dc3cd73150e02f7adce',
        languaje: 'es-ES',
    },
});

export default movieDB;
