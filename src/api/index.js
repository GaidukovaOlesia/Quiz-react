import axios from './service';

const quiz = {
  fetch: (() => axios.get('/quiz').then((data) => data)),
};

const jsQuiz = {
  fetch: ((quiz) => axios.get(`/${quiz}`).then((data) => data)),
};

export { quiz, jsQuiz };
