import React from 'react';

import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from  'react-router-dom'
import Searchbar from "./component/Searchbar"
function App() {
  return (
    <div className="App">
    <Router>
        {/*<ul>*/}
        {/*    <li><Link to="/">Search Drink</Link></li>*/}
        {/*</ul>*/}
        <Route exact path = "/">
            <Searchbar/>
        </Route>

    </Router>

    </div>
  );
}
export default App;
