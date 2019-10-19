import Axios from 'axios'

const GOT_OWNERS = 'GOT_OWNERS'
const GOT_OWNER = 'GOT_OWNER'
const ADDED_OWNER =' ADDED_OWNER'
const UPDATED_OWNER = 'UPDATED_OWNER'


const gotOwners =(owners)=>({
  type: GOT_OWNERS,
  owners
 })
 const gotOwner =(owner)=>({
  type: GOT_OWNER,
  owner
 })
 const addedOwner =(owner)=>({
   type: ADDED_OWNER,
   owner
 })

 const updatedOwner =(owner)=>({
   type: UPDATED_OWNER,
   owner
 })

 export const getOwners = ()=>{
  return async(dispatch)=>{
    const{data} = await client.query('/graphql') //need to add the right api
    dispatch(gotOwners(data))
  }
 }
 export const getOwner =(ownerId)=>{
  return async(dispatch)=>{
    const{data} = await client.query(`/api/owners/${ownerId}`)
    dispatch(gotOwner(data))
 }
}
 export const addOwner=(owner)=>{
   return async(dispatch)=>{
     const {data}= await Axios.post('/api/owners',owner)//need to add the right api
     dispatch(addedOwner(data))
   }
 }

export const updateOwner=(owner,ownerId)=>{
  return async(dispatch)=>{
    const {data} =await Axios.put(`/api/owners/${ownerId}`,owner)//need to add the right api
    dispatch(updatedOwner(data))
  }
}

export const ownersReducer = (state =[], action) => {
  switch (action.type) {
    case GOT_OWNERS:
      return  action.owners
    case GOT_OWNER:
      return action.owner
    case ADDED_OWNER:
      return [...state, action.owner]
    case UPDATED_OWNER:
      return action.owner
    default:
      return state
  }
 }


