import React from 'react'
import { connect }  from 'react-redux'
import { getOwner } from './Reducers/ownerReducer'

class SingleOwner extends React.Component{
  constructor(props){
    super(props)
    this.handleClick =this.handleClick.bind(this)
  }
  componentDidMount(){
    this.props.getOwner(this.props.paramId)
  }
  handleClick(event){
    event.preventDefault()
    alert(`Your request has been sent`)
  }

 render(){
   const owner= this.props.owners
   return (
   <main>
  <div>
  <h1>Owner Information</h1>
    <h2>Name: {owner.firstName} {owner.lastName} </h2>
    <img src={owner.img}/>
    <h3>Address: {owner.address}</h3>
    <h3>Facebook Id:</h3>
    <a href= {owner.fbId}/>
  </div>
  <button onClick={this.handleClick}>Request</button>
  </main>

)
 }
}

const mapStateToProps =(state,ownProps) =>{

  return({
    paramId:ownProps.match.params.ownerId,
    owners: state.owners
  })
}
const mapDispatchToProps =(dispatch)=>{
  return ({ getOwner:(ownerId) =>dispatch(getOwner(ownerId)),
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleOwner)
