import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.wheretheiss.at/v1/satellites',
});

const issData = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/25544')
      .then((result) => {
        resolve(result.data);
      })
      .catch(reject);
  });

export default issData;
