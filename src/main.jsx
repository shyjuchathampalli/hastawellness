import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App.jsx';
import './index.css';
import { Helmet } from 'react-helmet';

import ReactGA from 'react-ga';
ReactGA.initialize('G-R7SYFM0YGZ');

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Helmet>
        <title>Hasta Wellness | Best Dental clinic and Skin care centre Trivandrum</title>
        <meta name='description' content='Best dental-skin clinic in Trivandrum offering cosmetic dentistry, smile designing, laser hair removal, PRP therapy, and advanced peels in Kazhakoottam.'/>
        <meta name='kewords' content='prp therapy, skin care trivandrum, dental clinic trivandrum, laser hair removal, chemical peels, carbon peels, smile designing, mesotherapy' />
      </Helmet>
      <App />
    </Router>
  </React.StrictMode>,
);
