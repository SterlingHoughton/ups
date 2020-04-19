const { PORT, DB_USER, DB_PASSWORD } = process.env;

module.exports = {
  port: PORT || 4000,
  mongoURI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds243768.mlab.com:43768/mailservice_db`
}