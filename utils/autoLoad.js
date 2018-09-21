'use strict';

const glob = require('glob');
const path = require('path');

module.exports.loadRoutes = (app) => {
  glob('modules/*/**.routes.js', (err, files) => {
    if (!err) {
      files.forEach((filePath) => {
        require(path.resolve(filePath))(app);
      });
    }
  });
};
