import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home'
import AllOwners from './AllOwners'
import AllSitters from './AllSitters'
import SingleOwner from './SingleOwner';
import SingleSitter from './SingleSitter';
import UpdateOwner from './UpdateOwner'
import UpdateSitter from './UpdateSitter'



const App = () => {
 return (
   <Router>
      <div>
     <Switch>
        <Route exact path ='/' component ={Home} />
        <Route exact path ='/owners' component={AllOwners}/>
        <Route  exact path ='/sitters' component={AllSitters}/>
        <Route exact path= '/owners/:ownerId' component={SingleOwner}/>
        <Route exact path= '/sitters/:sitterId' component={SingleSitter}/>
        <Route exact path= '/owners/:ownerId' component={UpdateOwner}/>
        <Route exact path= '/sitters/:sitterId' component={UpdateSitter}/>
     </Switch>
   </div>
   </Router>

 )
}

export default App;
