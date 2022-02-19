var express = require('express');
const { report } = require('../app');
var router = express.Router();

var students = [
  { id: 1, firstName: "Jeff" },
  { id: 2, firstName: "Jesse" },
  { id: 3, firstName: "Lmaoer" },
  { id: 4, firstName: "Pinkman" },
  { id: 5, firstName: "Jmaoer" }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Base student path. Nothing here.');
});

router.get('/students', function (req, res, next) {
  res.json(students);
});

router.get('/:id', function (req, res, next) {
  var flag = false;
  for (let student of students) {
    if (student.id === parseInt(req.params.id)) {
      var temp = student;
      flag = true;
    }
  }
  if (flag) {
    res.json(temp);
  }
  else {
    res.send('ERROR: ID NOT FOUND FOR ID = ' + req.params.id);
  }
});

router.put('/:id/:firstName', function (req, res, next) {
  var flag = false;
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === parseInt(req.params.id)) {
      flag = true;
      students[i].id = parseInt(req.params.id);
      students[i].firstName = req.params.firstName;
    }
  }
  if (flag) {
    res.send('Student updated successfully!');
  }
  else {
    students.push({ id: parseInt(req.params.id), firstName: req.params.firstName })
    res.send('Student added successfully!');
  }
});

router.post('/:id/:firstName', function (req, res, next) {
  var flag = false;
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === parseInt(req.params.id)) {
      flag = true;
    }
  }
  if (flag) {
    res.send('ERROR: Student already in database.');
  }
  else {
    students.push({ id: parseInt(req.params.id), firstName: req.params.firstName })
    res.send('Student posted to database successfully!');
  }
});

router.delete('/:id', function (req, res, next) {
  var flag = false;
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === parseInt(req.params.id)) {
      students.splice(i, 1);
      flag = true;
      i--;
    }
  }
  if (flag) {
    res.send('Student successfully deleted!');
  }
  else {
    res.send('ERROR: ID NOT FOUND FOR ID = ' + req.params.id);
  }
});

/*test*/
router.post('/', function (req, res, next) {
  const user = {
    "id": req.body.id
    "name": req.body.name
  }
  var db = req.app.locals.db
  db.collection(dbmaybe);
  res.send("User inserted")
}
module.exports = router;
