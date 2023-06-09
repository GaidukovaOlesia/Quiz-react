import axios from './service';

const quizes = {
  fetch: (() => axios.get('/quiz').then((data) => data)),
};

const quiz = {
  fetch: ((quiz) => axios.get(`/${quiz}`).then((data) => data)),
};

const newQuiz = {
  fetch: ((body) => axios.post('/quiz', body).then((data) => data)),
};

const favouriteQuiz = {
  fetch: ((body, id) => axios.put(`/quiz/${id}`, body).then((data) => data)),
};

export {
  quizes,
  quiz,
  newQuiz,
  favouriteQuiz,
};
