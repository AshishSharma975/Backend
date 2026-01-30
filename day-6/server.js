const app = require('./src/app');

const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("mongodb+srv://ashish:soO0dwYjf4dVXV1N@cluster0.6fducnw.mongodb.net/day-6")
    .then(()=>{
        console.log("Connected to DB");
    })
}

connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}   );