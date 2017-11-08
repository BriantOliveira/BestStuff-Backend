var db = require('../models');

module.exports = (app) => {

  // INDEX
  app.get('/contests', (req, res) => {
    // res.json({message: "Success!"});
    db.Contest.findAll().then((contests) => {
      res.json(contests);
    }).catch(err => {
      if (err) {
        res.json(err)
      }
    })
  })

  // SHOW
  app.get('/contests/:id', (req, res) => {
    const contestId = req.params.id;
    db.Contest.findById(contestId).then((contest) => {
      res.json(contest)
    })
  });

  // CREATE
  app.post('/contests/create', (req, res) => {

    db.Contest.create(req.body).then((contest) => {
      res.status(200);
      res.json({msg: 'successfully added', contest});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    })
  });

  // UPDATE
  app.put('/contests/:id/update', (req, res) => {
    const contestId = req.params.id;
    const contest = req.body
    db.Contest.update(contest, {
      where: { id: contestId }
    }).then((response) => {
      if (response.status === 200) {
        res.status(200)
      }
    }).catch((err) => {
      if(err) {
        res.json(err)
      }
    });
  });


  // DESTROY
  app.delete('/contests/:id', (req, res) => {
    const contestId = req.body.params;
    db.Contest.destroy(contestId).then((contest) => {
      res.status(200);
      res.json({msg: 'successfully deleted', contest});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    });
  });

};
