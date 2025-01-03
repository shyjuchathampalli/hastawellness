import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App.jsx';
import './index.css';
import { Helmet } from 'react-helmet';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Helmet>
        <title>Hasta Wellness | Best Dental clinic and Skin care centre Trivandrum</title>
        <meta name='description' content='One of the best dental-skin clinic Offering cosmetic dentistry, smile designing, laser hair removal, prp therapy, carbon peels and chemical peels in Kazhakoottam, Trivandrum.'/>
        <meta name='kewords' content='prp therapy, skin care trivandrum, dental clinic trivandrum, laser hair removal, chemical peels, carbon peels, smile designing, mesotherapy' />
      </Helmet>
      <App />
    </Router>
  </React.StrictMode>,
);
