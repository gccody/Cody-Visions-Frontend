import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyATkJwfTVp5ru0gZF0pCgiWyJ4snYlwOq4",
  authDomain: "codyvisions-86fc9.firebaseapp.com",
  projectId: "codyvisions-86fc9",
  storageBucket: "codyvisions-86fc9.appspot.com",
  messagingSenderId: "108639697782",
  appId: "1:108639697782:web:a517098278bd7f7e759857",
  measurementId: "G-C5Y3BBC6V6"
};

initializeApp(firebaseConfig);

root.render(
  // <React.StrictMode>
    <HashRouter>
      <App />
      {/* <Footer /> */}
    </HashRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
