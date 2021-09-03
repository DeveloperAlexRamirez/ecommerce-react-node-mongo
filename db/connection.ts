const mongoose = require('mongoose');


const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
        })
        console.log('Conectado a Mongo')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;
