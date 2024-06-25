const path = require('path')
const viewsPath = require('./../utils/viewPath')

exports.main = (req, res) => {
  res.sendFile(path.join(viewsPath,"index.html"))
};
exports.about = (req, res) => {
  res.sendFile(path.join(viewsPath,"about.html"))
};
exports.content = (req, res) => {
  res.sendFile(path.join(viewsPath,"content.html"))
};
