import React from 'react'
import { connect }  from 'react-redux'
import { getSitter} from './Reducers/sitterReducer'

class SingleSitter extends React.Component{
  constructor(props){
    super(props)
    this.handleClick =this.handleClick.bind(this)
  }
  componentDidMount(){

    this.props.getSitter(this.props.paramId)
  }
  handleClick(event){
    event.preventDefault()
    alert(`Congratulations! You have selected your pet sitter`)
  }

 render(){
   const { sitters =[] } = this.props
   console.log('dsfsdfsffds', sitters.profile
   )
   return (
   <main>
  <div >
  <h1>Sitter Information</h1>
    <h2>Name: {sitters.firstName} {sitters.lasttName}</h2>
    <img src={sitters.img}/>
    <h3>Reason I want to PetSit:</h3>
    <p>{sitters.reason}</p>
    <h3>Address: {sitters.address}</h3>
    <h3>Facebook Id:</h3>
    <a href={sitters.fbId}/>
  </div>
  <button onClick={this.handleClick}>Aprrove</button>
  </main>

)
 }
}

const mapStateToProps =(state,ownProps) =>{
  return({
    paramId:ownProps.match.params.sitterId,
    sitters: state.sitters
  })
}
const mapDispatchToProps =(dispatch)=>{
  return ({ getSitter:(sitterId) =>dispatch(getSitter(sitterId)),
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleSitter)
