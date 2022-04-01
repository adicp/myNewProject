const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    // app.get('/api', PersonController.index);
    app.get('/api', PersonController.getAllPeople);
    app.get('/api/:id', PersonController.getEachPerson);   
    app.put('/api/edit/:id', PersonController.updateEachPerson);
    app.post('/api', PersonController.createPerson); 
    app.delete('/api/:id', PersonController.deleteEachPerson);
    
}
