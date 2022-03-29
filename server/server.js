const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
app.use(cors())                
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));  
require('./config/mongoose.config');    

require('./routes/person.routes')(app);
/* These two lines are the long-hand notation of the above code, to better illustrate what's going on: */
/* const personRoutes = require("./routes/person.routes"); */
/* personRoutes(app); */
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
