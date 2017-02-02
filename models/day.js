var Sequelize = require('sequelize');
var db = require('./_db');

const Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER
  }
}, {
  hooks: {
    afterDestroy: function(day) {
      console.log('changing day numbers above ' + day.number);
      Day.findAll({where: {id: {$gt: day.id}}})
      .then((daysArr) => {
        // console.log(daysArr);
        daysArr.forEach((ele) => {
          let newNum = ele.number;
          ele.update({
            number: newNum - 1,
          });
        });
      });
    }
  }
});

module.exports = Day;
