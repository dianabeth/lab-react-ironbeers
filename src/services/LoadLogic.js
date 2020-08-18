import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com',
});

export const loadBeers = () => {
  return instance.get('/beers').then((response) => {
    const data = response.data;
    return data;
  });
};

export const getBeer = (_id) => {
  return instance
    .get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
    .then((response) => {
      const data = response.data;
      return data;
    });
};

export const randomBeer = (id) => {
  return axios
    .get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((response) => {
      const data = response.data;
      return data;
    });
};
