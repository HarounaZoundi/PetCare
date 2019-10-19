import React from 'react'
import {Link} from 'react-router-dom'
const SecondPage = () => {
    return (
      <main>
      <div>
          <h3>Please Select: </h3>
      </div>
      <div>
          <img height ='200px' width ='200px' src="download.png"/>
      </div>
      <div>
          <Link to='/owners'>I'm a Pet Sitter</Link>
      </div>
      <br/>
      <div>
          <img height ='200px' width ='200px' src='21645.png' />
      </div>
      <div>
          <Link to='/sitters'>I'm a Pet Owner</Link>
      </div>
      </main>
    )
  }


export default SecondPage
