import Axios from 'axios';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import gql from 'graphql-tag';

const endPointUrl = 'http://localhost:9000/graphql'
const client = new ApolloClient({
   link: new HttpLink({uri:endPointUrl}),
   cache:new InMemoryCache()
});

const GOT_OWNERS = 'GOT_OWNERS'
const GOT_OWNER = 'GOT_OWNER'


const gotOwners =(owners)=>({
  type: GOT_OWNERS,
  owners
 })
 const gotOwner =(owner)=>({
  type: GOT_OWNER,
  owner
 })

 export const getOwners = ()=>{
  return async(dispatch)=>{
  const query = gql`
     {
       profile(owner: true){
         firstName
         lastName
         img
       }
     }`
    const{data} = await client.query({query}) //need to add the right api
    dispatch(gotOwners(data))
  }
 }
 export const getOwner =(ownerId)=>{
  return async(dispatch)=>{
    const query = gql`
         {
           profile(id: ${ownerId}){
             firstName
             lastName
           }
         }`
    const{data} = await client.query({query}) //need to add the right api
    dispatch(gotOwner(data))
 }
}

export const ownersReducer = (state =[], action) => {
  switch (action.type) {
    case GOT_OWNERS:
      return  action.owners
    case GOT_OWNER:
      return action.owner
    default:
      return state
  }
 }


