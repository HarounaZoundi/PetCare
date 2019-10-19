
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home'
import AllOwners from './AllOwners'
import AllSitters from './AllSitters'
import SingleOwner from './SingleOwner';
import SingleSitter from './SingleSitter';
import UpdateOwner from './UpdateOwner'
import UpdateSitter from './UpdateSitter'
import Navbar from './Navbar'
import Error from './Error'

const Root = () => {
 return (
   <Router>
      <div>
     <Navbar/>
     <Switch>
        <Route exact path ='/' component ={Home} />
        <Route exact path ='/owners' component={AllOwners}/>
        <Route  exact path ='/sitters' component={AllSitters}/>
        <Route exact path= '/owners/:ownerId' component={SingleOwner}/>
        <Route exact path= '/sitters/:sitterId' component={SingleSitter}/>
        <Route exact path= '/owners/:ownerId' component={UpdateOwner}/>
        <Route exact path= '/sitters/:sitterId' component={UpdateSitter}/>
        <Route component={Error}/>
     </Switch>
   </div>
   </Router>

 )
}

export default Root
