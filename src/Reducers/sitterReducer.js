import Axios from 'axios'

const GOT_SITTERS = 'GOT_SITTERS'
const GOT_SITTER= 'GOT_SITTER'
const ADDED_SITTER =' ADDED_SITTER'
const UPDATED_SITTER = 'UPDATED_SITTER'


const gotSitters =(sitters)=>({
  type: GOT_SITTERS,
  sitters
 })
 const gotSitter =(sitter)=>({
  type: GOT_SITTER,
  sitter
 })
 const addedSitter =(sitter)=>({
   type: ADDED_SITTER,
   sitter
 })

 const updatedSitter =(sitter)=>({
   type: UPDATED_SITTER,
   sitter
 })


 export const getSitters = ()=>{
  return async(dispatch)=>{
    const{data} = await Axios.get('/api/sitters')//need to add the right api
    dispatch(gotSitters(data))
  }
 }
 export const getSitter =(sitterId)=>{
  return async(dispatch)=>{
    const{data} = await Axios.get(`/api/sitters/${sitterId}`) //need to add the right api
    dispatch(gotSitter(data))
 }
}
 export const addSitter=(sitter)=>{
   return async(dispatch)=>{
     const {data}= await Axios.post('/api/sitters',sitter)
     dispatch(addedSitter(data))
   }
 }

export const updateSitter=(sitter,sitterId)=>{
  return async(dispatch)=>{
    const {data} =await Axios.put(`/api/sitters/${sitterId}`,sitter)//need to add the right api
    dispatch(updatedSitter(data))
  }
}

export const sittersReducer = (state =[], action) => {
  switch (action.type) {
    case GOT_SITTERS:
      return  action.sitters
    case GOT_SITTER:
      return action.sitter
    case ADDED_SITTER:
      return [...state, action.sitter]
    case UPDATED_SITTER:
      return action.sitter
    default:
      return state
  }
 }


