//BASE DA URL:https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=4430d178a9d64fe91b44206de364a329&language=pt-BR

import axios from 'axios';

const api = axios.create({
baseURL:'https://api.themoviedb.org/3/'
});

export default api;