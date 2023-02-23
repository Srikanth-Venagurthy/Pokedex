import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


if (
  navigator.userAgent.includes("Android") &&
  navigator.userAgent.includes("Chrome")
) {
  window.addEventListener("DOMContentLoaded", () => {
    const selector =
      "a:not([data-no-sw-precache]):not([target]):not([download]):not([href^='mailto:']):not([href^='tel:'])";
    const links = Array.from(document.querySelectorAll(selector));
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = link.href;
      });
    });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
