import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Hello from './Hello'
//import Counter from './counter.jsx'
//import Backpack from './Backpack.jsx';
import Bmi from './Bmi.jsx';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Bmi></Bmi>
    {/*<Backpack></Backpack>
    <Counter/>
    <Hello name="Kuntinan" surname="Pengsupap"/>
    <Hello wieght="80" long="173"/>
    {/*<App> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
