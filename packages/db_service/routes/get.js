const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

const pingHandler = (req, res) => {
  res.send('Healthy')
};

const mailHandler = async (req, res) => {
  let mails;
  let error;

  try {
    mails = await Mail.find();
  } catch {
    error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'DB Service',
    status: 200,
    payload: mails || error
  });
};

const singleMailHandler = async ({ params: { id } }, res) => {
  let mail;
  let error;

  try {
    mail = await Mail.findOne({ _id: id })
  } catch {
    error = err
  }

  res.send({
    message: 'Got response from DB!',
    service: 'DB Service',
    status: 200,
    payload: mail || error
  });
}

module.exports = server => {
  server
  .get('/', pingHandler)
  .get('/mails', mailHandler)
  .get('/mails/:id', singleMailHandler)
};