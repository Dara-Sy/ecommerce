module.exports = {
  sendJSON(req, res) {
    // show one or all
    res.json(res.locals.product || res.locals.products);
  },
  handleDelete(req, res) {
    res.status(204).end();
  },
  throwError(err, req, res, next) {
    console.log(err);
    res.status(404).send(`error message here boohoo`);
  }
};
