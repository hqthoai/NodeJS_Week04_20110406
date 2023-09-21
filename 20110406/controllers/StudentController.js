const mygroup = require ('../models/MyGroup');

class StudentController {

    getStudentById(req, res) {
        const id = req.params.id ;
        if (id) {
            const student = mygroup.find((item) => item.id === id);
            if (student) res.send(student);
            else res.send({error:'not valid'});
        }
        else {
            res.send({error:'not valid'});
        }
    }

    addStudent(req, res) {
        const id = req.params.id ;
        const newStudent = req.body;
        if (id) {
            const student = mygroup.find((item) => item.id === id);
            if (!student) {
                mygroup.push(newStudent);
                res.send('Add successfully!')
            }
            else res.send('Not valid');
        }
        else {
            res.send('Not valid');
        }
    }

}

module.exports = new StudentController;
