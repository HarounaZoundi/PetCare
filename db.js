
const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   profile:store.collection('profile'),
   pet:store.collection('pet'),
   connection:store.collection('connection'),
   notification:store.collection('notification'),
   schedule:store.collection('schedule')
};