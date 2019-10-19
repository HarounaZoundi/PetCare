
import React from 'react'
import {Link} from 'react-router-dom'
const Owners= (props)=>{
 return (
   <div>
        <div>
    <Link to ={`/Owners/${props.Owners.id}`}>
     <h4>{props.owner.firstName} {props.owner.firstName}
     </h4>
     </Link>
     </div>
     <img  height ='200px' width ='200px' src ={props.Owners.imageUrl}/>
   </div>
 )
}

export default Owners
