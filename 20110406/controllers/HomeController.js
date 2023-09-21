const mygroup = require ('../models/MyGroup');

class HomeController {

    // [GET] /
    index(req, res) {
        res.json(mygroup);
    }

}

module.exports = new HomeController;
