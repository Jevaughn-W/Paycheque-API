const { response } = require('express');

const router = require('express').Router();

module.exports = (db) => {

  router.get('/:province', (req, res) => {
    const province = req.params.province
    
    let queryString = `SELECT * FROM provinces WHERE name='${province}';`
    
    db.query(queryString).then((data)=> {
      res.send(data.rows);
    });

  });

  return router;
};
