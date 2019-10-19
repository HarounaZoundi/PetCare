import React from 'react'
import Sitters from './Sitters'
import { connect } from 'react-redux'
import { getSitters} from '../reducers/sitterReducer'

class AllSitters extends React.Component{

 componentDidMount(){
   this.props.getSitters()
 }
 render(){
   return(
     <main>
    <div>
      <h2>All Sitters</h2>
       {this.props.sitters.map((sitters,idx) =>
         (<Sitters key={idx} sitters={sitters} />)
       )}
    </div>
    </main>
   )
 }
}

const mapStateToProps = (state,ownProps) =>{
return ({
  sitters: state.sitters,
  paramId : ownProps.match.params.sitterId
})
}

const mapDispatchToProps = dispatch=>(
 {getSitters:()=>dispatch(getSitters())
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(AllSitters)
