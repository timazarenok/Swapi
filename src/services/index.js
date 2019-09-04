import axios from '../axiosConfig';

export default class SwapiService {
    static getData = async (url) => {
        const response = await axios.get(url);
        return response.data.results;
    };

    static getPerson = async (id) => {
        const response = await axios.get(`/people/${id}/`);
        return response.data;
    };

    static getPlanet = async (id) => {
      const response = await axios.get(`/planets/${id}/`);
      return response.data;
    };

    static getPlanets = async () => {
        const response = await axios.get('/planets/');
        return response.data.results;
    };

}