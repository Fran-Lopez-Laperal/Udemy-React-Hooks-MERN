import React from 'react';
import ReactDOM from 'react-dom/client';
// import CounteWithCustomHook from './components/01-useState/CounterWithCustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';
// import HolaMundo from './HookApp'
// import CounterApp from './components/01-useState/CounterApp'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<SimpleForm/>
  </React.StrictMode>
);

