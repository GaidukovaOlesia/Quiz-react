import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './pages/NotFound';
import QuizRoutes from './components/QuizRoutes';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/quiz/*' element={<QuizRoutes />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
