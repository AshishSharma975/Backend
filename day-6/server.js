const app = require('./src/app');

const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("")
    .then(()=>{
        console.log("Connected to DB");
    })
}

connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}   );