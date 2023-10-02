import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <>
    <BrowserRouter   className="signup-page d-flex justify-content-center align-items-center"
    style={{
      minHeight: '100vh',
      backgroundImage: "url('https://source.unsplash.com/weekly?nature beauty/1200*1200')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <App />
    </BrowserRouter>
  </>
);
