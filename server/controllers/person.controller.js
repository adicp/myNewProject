const Person = require('../models/person.model');

// module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
//     response.json({     // This is where we're setting the API's response to the requesting client
//         message: "Hello World"
//     });
// };
          /* The method below is new */
module.exports.createPerson = (request, response) => {

    Person.create(request.body) 
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllPeople = (request, response) => {
    
    Person.find ({})
        .then (allPeople => response.json(allPeople))
        .catch (err => response.json(err));
}

module.exports.deleteEachPerson = (request, response) => {
    console.log("Entered delete");
    Person.deleteOne({ _id: request.params.id})
        .then(deleteConfirmation => {
            response.json(deleteConfirmation);
            console.log(deleteConfirmation);
        
        })
        .catch(err => response.json(err))
}
module.exports.getEachPerson = (request, response) => {
    console.log(request.params.id);
    console.log("entered geteach");
    Person.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateEachPerson = (request, response) => {
    console.log("entered update");
    console.log(request.body);
    console.log(request.params.id);
    Person.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updatedProduct => response.json(updatedProduct))
    .catch(err => response.json(err))
}