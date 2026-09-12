import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// No BrowserRouter — this site uses anchor-link navigation only (#home, #services, etc.)
// There are no <Route> components, so BrowserRouter is unnecessary and can cause
// blank-screen issues on Netlify where History API intercepts all paths.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
