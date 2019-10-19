const profileData = require('./data/profile');
const connection = require('./data/connection');
const pet = require('./data/pet');
const schedule = require('./data/schedule');
const notification = require('./data/notification');

const Query = {
   profile: (root,args,context,info) => profileData.filter(user => (user.id === args.id || user.owner === args.owner)),
   connection: () => connection,
   pet: () => pet,
   schedule: () => schedule,
   notification: () => notification
}

module.exports = {Query}