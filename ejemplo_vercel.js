module.exports = (req, res) => {
    const { nombre = 'Sergio' } = req.query
    res.status(200).send(`Mi nombre es ${nombre}, ¡bienvenido!`)
  }