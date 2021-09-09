var express = require('express');
var router = express.Router();

const checkToken=require('../middleware/token.middleware');

router.get('/', (req, res, next) => {
  res.send({ title: 'user GET Method' });
});
router.post('/',checkToken, (req, res, next) => {
  res.send({ error: false, data: req.body.username });
});
router.post('/find/:id', (req, res, next) => {
  let id=req.params.id
  res.send({ title: 'Express',id:id });
});
router.delete('/', (req, res, next) => {
  res.send({ title: 'Express' });
});

module.exports = router;
