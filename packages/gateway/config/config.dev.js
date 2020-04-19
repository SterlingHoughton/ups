const { PORT, DB_SERVICE_PORT, DB_HOST } = process.env;

module.exports = {
  port: PORT || 3000,
  dbservice: {
    port: DB_SERVICE_PORT || 4000,
    host: DB_HOST || 'http://localhost'
  }
}