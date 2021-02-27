import api from './api.service';

export default {
  buscarPokemons: async (pokemon) => {
    const response = await api.get('/pokemon?limit=152&offset=0', pokemon);
    return response.data;
  },
  buscarUrl: async (id) => {
    const response = await api.get(`/pokemon/${id}`);
    return response.data;
  },
};