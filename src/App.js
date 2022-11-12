import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import RootController from "./controllers/root";
import store from './redux/configureStore';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<RootController />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
