import React from 'react';
import ReactDOM from 'react-dom/client';

import ChatApp  from './components/ChatApp'

function App() {
  return(
    <ChatApp/>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

