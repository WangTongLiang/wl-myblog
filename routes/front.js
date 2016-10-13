const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('前台模块');
});

module.exports = router;
