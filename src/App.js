
import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AllOwners from './AllOwners'
import AllSitters from './AllSitters'
import SingleOwner from './SingleOwner';
import SingleSitter from './SingleSitter';
import SecondPage from './SecondPage'
import Home from './Home'

const App = () => {
 return (
   <Router>
      <div>
     <Switch>
        <Route exact path= '/secondPage' component={SecondPage}/>
        <Route exact path ='/owners' component={AllOwners}/>
        <Route  exact path ='/sitters' component={AllSitters}/>
        <Route exact path= '/owners/:ownerId' component={SingleOwner}/>
        <Route exact path= '/sitters/:sitterId' component={SingleSitter}/>
	 			<Route exact path='/' component={Home} />
     </Switch>
   </div>
   </Router>

 )
}

export default App
