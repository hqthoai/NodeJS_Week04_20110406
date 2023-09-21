const mygroup = require ('../models/MyGroup');

class MessageController {

    // [GET] /
    index(req,res) {
        const names = mygroup.map(item => item.name);
        const htmlResponse = `<html><body><ul>${names.map(name => `<li>${name}</li>`).join('')}</ul></body></html>`;
        return res.send(htmlResponse);
    }

    // [GET] /:id
    getById(req, res) {
        const id = req.params.id;
        const student = mygroup.find(item => item.id === id);

        if (!student) {
            return res.send('Not valid');
        }
        const htmlResponse = `<html><body><ul><li>${student.name}</li></ul></body></html>`;
        return res.send(htmlResponse); 
    }

}

module.exports = new MessageController;
