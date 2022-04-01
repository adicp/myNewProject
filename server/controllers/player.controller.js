const Player = require('../models/player.model');

// module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
//     response.json({     // This is where we're setting the API's response to the requesting client
//         message: "Hello World"
//     });
// };
          /* The method below is new */
module.exports.createPlayer = (request, response) => {
    Player.create(request.body) 
        .then(player => response.json(player))
        .catch(err => response.json(err));
}

module.exports.getAllPlayers = (request, response) => {
    Player.find ({})
        .then (allPlayers => response.json(allPlayers))
        .catch (err => response.json(err));
}

module.exports.deleteEachPlayer = (request, response) => {
    console.log("Entered delete");
    Player.deleteOne({ _id: request.params.id})
        .then(deleteConfirmation => {
            response.json(deleteConfirmation);
            console.log(deleteConfirmation);
        
        })
        .catch(err => response.json(err))
}
module.exports.getEachPlayer = (request, response) => {
    console.log(request.params.id);
    console.log("entered geteach");
    Player.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateEachPlayer = (request, response) => {
    console.log("entered update");
    console.log(request.body);
    console.log(request.params.id);
    Player.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updatedPlayer => response.json(updatedPlayer))
    .catch(err => response.json(err))
}