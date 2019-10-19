import React from 'react'
import { connect }  from 'react-redux'
import { getSitter} from './reducers/sitterReducer'

class SingleSitter extends React.Component{
  constructor(props){
    super(props)
    this.handleClick =this.handleClick.bind(this)
  }
  componentDidMount(){
    this.props.getOwner(this.props.paramId)
  }
  handleClick(event){
    event.preventDefault()
    alert(`Congratulations! You have selected your pet sitter`)
  }

 render(){
   const sitter= this.props.sitters
   return (
   <main>
  <div >
  <h1>Sitter Information</h1>
    <h2>Name: {sitter.name}</h2>
    <img src={sitter.imageUrl}/>
    <h3>Address: {sitter.address}</h3>
    <h3>Facebook Id:</h3>
    <p>{sitter.fbLink}</p>
  </div>
  <button onClick={handleClick}>Aprrove</button>
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
