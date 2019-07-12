module.exports = {
  getAll: (req, res) => {
    const db = req.app.get("db");
    db.getAll()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        console.log(err);
      });
  },

  delete: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_house(id)
      .then(() => res.status(200).send(houses))
      .catch(err => {
        console.log(err);
      });
  },

  add: (req, res) => {
    const db = req.app.get("db");
    let { name, address, city, state, zip } = req.body;
    db.addHouse([name, address, city, state, zip])
      .then(house => res.status(200).send(house))
      .catch(err => {
        console.log(err);
      });
  }
};
