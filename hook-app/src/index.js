import React from 'react';
import ReactDOM from 'react-dom/client';
// import HolaMundo from './HookApp'
import CounterApp from './components/01-useState/CounterApp'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <CounterApp/>
  </React.StrictMode>
);

