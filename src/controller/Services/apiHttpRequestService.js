const axios = require('axios');

module.exports = {
  async requestGiphyApi(titleForSearch) {
    const api = axios.create({
      baseURL: 'https://api.giphy.com/v1/gifs',
    });

    const api_key = 'cL7kvfhq0HL3HEoVeFTIEJyXfcwJ10kF';
    const q = titleForSearch;
    const limit = 1;
    const offset = 0;
    const rating = 'g';
    const lang = 'en';

    const response = await api.get('/search', {
      params: { api_key, q, limit, offset, rating, lang },
    });
    return response.data;
  },

  async requestRecipepuppyApi(ingredients) {
    const api = axios.create({
      baseURL: 'http://www.recipepuppy.com',
    });

    const i = ingredients.join(',');

    const response = await api.get('/api', { params: { i } });
    return response.data;
  },
};
