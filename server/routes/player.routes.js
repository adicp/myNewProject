const PlayerController = require('../controllers/player.controller'); 

module.exports = (app) => {
    // app.get('/api', PlayerController.index);
    app.get('/api', PlayerController.getAllPlayers);
    app.get('/api/:id', PlayerController.getEachPlayer);   
    app.put('/api/edit/:id', PlayerController.updateEachPlayer);
    app.post('/api', PlayerController.createPlayer); 
    app.delete('/api/:id', PlayerController.deleteEachPlayer);
    
}
