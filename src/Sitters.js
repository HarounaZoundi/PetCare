import React from 'react'
import {Link} from 'react-router-dom'
const Sitters =(props) =>{
 return(
   <div>
     <ul>
     <Link to ={`/sitters/${props.sitters.id}`}>
       <li>{props.sitters.name}
       </li>
    </Link>
     </ul>
   </div>
 )
}

export default Sitters
