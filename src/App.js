
import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AllOwners from './AllOwners'
import AllSitters from './AllSitters'
import SingleOwner from './SingleOwner';
import SingleSitter from './SingleSitter';
import SecondPage from './SecondPage'

const App = () => {
 return (
   <Router>
      <div>
     <Switch>
        <Route exact path= '/secondPage' component={SecondPage}/>
        <Route exact path ='/owners' component={AllOwners}/>
        <Route  exact path ='/sitters' component={AllSitters}/>
        <Route exact path= '/owners/:ownerId' component={SingleOwner}/>
        <Route exact path= '/sitters/:sitterId' render={(props) => <SingleSitter { ...props }/>} />
     </Switch>
   </div>
   </Router>

 )
}

export default App
