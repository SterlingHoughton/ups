module.exports = server => {
  server.get('/', (req, res) => {
    res.send('Hello from the database');
  })
}