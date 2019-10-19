import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import gql from 'graphql-tag';

const endPointUrl = 'http://localhost:9000/graphql'
const client = new ApolloClient({
   link: new HttpLink({uri:endPointUrl}),
   cache:new InMemoryCache()
});

const GOT_SITTERS = 'GOT_SITTERS'
const GOT_SITTER= 'GOT_SITTER'


const gotSitters =(sitters)=>({
  type: GOT_SITTERS,
  sitters
 })
 const gotSitter =(sitter)=>({
  type: GOT_SITTER,
  sitter
 })


 export const getSitters = ()=>{
  return async(dispatch)=>{
     const query = gql`
         {
           profile(owner: false){
             firstName,
             lastName,
             img,
             reason,
             address,
             fbId
           }
         }`
    const{data} = await client.query({query}) //need to add the right api
    dispatch(gotSitters(data))
  }
 }
 export const getSitter =(profileId)=>{
  return async(dispatch)=>{
    const query = gql`
             {
               profile(id: ${profileId}){
                firstName,
                lastName,
                img,
                reason,
                address,
                fbId
               }
             }`
    const{data} = await client.query({query}) //need to add the right api
    dispatch(gotSitter(data))
 }
}


export const sittersReducer = (state =[], action) => {
  switch (action.type) {
    case GOT_SITTERS:
      return  action.sitters
    case GOT_SITTER:
      return action.sitter
    default:
      return state
  }
 }


