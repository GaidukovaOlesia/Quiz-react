import axios from './service';

const quiz = {
  fetch: (() => axios.get('/quiz').then((data) => data)),
};

export { quiz };
