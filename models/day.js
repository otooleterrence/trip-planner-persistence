var Sequelize = require('sequelize');
var db = require('./_db');

const Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER
  }

// }, {
//   hooks: {
//     afterDestroy: function(day) {
//         console.log(day)
//     }
//   }
});

module.exports = Day;
