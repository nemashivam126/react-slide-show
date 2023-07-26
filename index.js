import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals'
import SlideShow from './components/eventHandler/slideShow';
import { ButtonSlide } from './components/eventHandler/buttonSlide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className='text-center'>Auto slideshow below</h1>
    <SlideShow/>
    <hr/>
    <h1 className='text-center mt-5'>Sliding with next & previous buttons below</h1>
    <ButtonSlide/>
  </React.StrictMode>
);
reportWebVitals();