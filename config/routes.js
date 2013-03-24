module.exports = function (app) {
    //Page routes
    var page = require('../routes/page');
    app.get('/', page.index);

    //Employee routes
    var employee = require('../routes/employee');
    app.get('/api/employee', employee.list);
    app.get('/api/employee/:id', employee.find);
    app.post('/api/employee', employee.insert);
    app.put('/api/employee/:id', employee.update);
    app.delete('/api/employee/:id', employee.remove);
};