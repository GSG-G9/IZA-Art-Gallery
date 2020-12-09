const path = require('path');

const error404 = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

const error500 = (err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
};

module.exports = { error404, error500 };
