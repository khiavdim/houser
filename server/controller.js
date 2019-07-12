module.exports = {
    getAll: (req, res) => {
    const db = req.app.get("db");
    db.getAll()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        console.log(err);
      });
  }
}