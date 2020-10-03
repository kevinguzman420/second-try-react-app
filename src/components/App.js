import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/App.css';
import Home from '../pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/second-try-react-app"><Home /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
