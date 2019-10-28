import React from 'react';
import QuoteMachine from './component/QuoteMachine'
import './style/css/App.css';

function App() {
  return (
    <div className="app container-fluid min-vh-100 d-flex flex-column justify-content-center">
      <QuoteMachine/>
    </div>
  );
}

export default App;