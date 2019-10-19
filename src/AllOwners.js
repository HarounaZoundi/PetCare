import React from 'react'
import Owners from './Owners'
import { connect } from 'react-redux'
import { getOwners } from './Reducers/ownerReducer'
import { getSitter} from './Reducers/sitterReducer'

class AllOwners extends React.Component{

 componentDidMount(){
   this.props.getOwners()
 }
 render(){
   return(
     <main>
    <div>
      <h2>All Owners</h2>
       {this.props.owners.map((owner,idx)=>
         (<Owners key={idx} owner={owner} />)
       )}
    </div>
    </main>
   )
 }
}

const mapStateToProps = (state,ownProps) =>{
return ({
  Owners: state.owners,
  paramId : ownProps.match.params.ownerId
})
}

const mapDispatchToProps = dispatch=>(
 {getOwners:()=>dispatch(getOwners()),
  getSitter: (sitterId)=>dispatch(getSitter(sitterId)),
  getSitter: ()=>dispatch(getSitter(1))

  }
)

export default connect(mapStateToProps,mapDispatchToProps)(AllOwners)
