const express = require('express');
const router = express.Router();

const studentController = require('../controllers/StudentController');

router.get('/:id', studentController.getStudentById);
router.post('/:id', studentController.addStudent);

module.exports = router;