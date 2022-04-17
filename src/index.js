import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/banner';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import Slider from './components/Slider/Slider';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Banner />
      <NavBar />
      <Slider />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
