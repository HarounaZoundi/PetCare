import React from 'react'
import {Link} from 'react-router-dom'
const Sitters =(props) =>{
console.log("pooooooooooooooooooooooooo", props)
 return(
   <div>
     <ul>
     <Link to ={`/sitters/${props.sitters.id}`}>
       <li>{props.sitters.firstName} {props.sitters.lastName }
       <div>
            <img src={ props.sitters.img } />
       </div>
       </li>
    </Link>
     </ul>
   </div>
 )
}

export default Sitters
