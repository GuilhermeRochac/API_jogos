


module.exports = {

  get : (req, res) => {

    res.status(200).send({
      "author" : "Guilherme Oliveira Cardoso Rocha",
      "description" : "Api feita para um site de jogos"
    });
  }
}

