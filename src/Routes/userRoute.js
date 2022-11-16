const userController = require('../Controllers/userController');

module.exports = (app) => {
    app.post('/create/user', userController.createUser);
}