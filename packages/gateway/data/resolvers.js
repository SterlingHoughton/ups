const axios = require('axios');
const { dbservice: { port, host } } = require('../config');

const get = async path => (await axios.get(`${host}:${port}/${path}`)).data.payload;

const post = async (path, body) => (await axios.post(`${host}:${port}/${path}`, { ...body })).data.payload;

exports.resolvers = {
  Query: {
    mails: () => get('mails'),
    mail: (_, { id }) => get(`mail/${id}`)
  },
  Mutation: {
    mail: (_, args) => post('mails', args)
  }
};