const homeRouter = require('./home');
const messageRouter = require('./message');
const studentRouter = require('./student');

function route (app) {
    app.use('/20110406', studentRouter);
    
    app.use('/message', messageRouter);
    
    app.use('/', homeRouter);
}

module.exports = route;