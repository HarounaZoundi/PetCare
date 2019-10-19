import React from 'react'
import {Link} from 'react-router-dom'
const SecondPage = () => {
    return (
      <div>
          <h3>Please Select: </h3>
          <Link to='/owners'>I'm a Pet Sitter</Link>
          <Link to='/sitters'>I'm a Pet Owner</Link>
      </div>
    )
  }


export default SecondPage
