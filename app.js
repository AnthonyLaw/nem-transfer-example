var express = require('express');
var transfer = require('./src/transfer');

var app = express();

app.listen(3000, () => console.log('app listening on port 3000!'));

// end point
app.use('/transfer/xem/:address/:amount', function(req, res, next) {
  var address = req.params.address;
  var amount = req.params.amount;

  transfer.data.xemTransfer(address, amount);

  next();
});

app.use('/transfer/mosaic/:address/:amount', function(req, res, next) {
  var address = req.params.address;
  var amount = req.params.amount;

  transfer.data.mosaicTransfer(address, amount);

  next();
});

module.exports = app;
