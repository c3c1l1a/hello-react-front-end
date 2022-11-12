import React from 'react';
import { Provider } from 'react-redux';
import Greeting from "./components/greeting";
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
          <Route exact path="/" element={<Greeting />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
