const mongoose = require('mongoose');

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
        })
        console.log('Connected to the Mongo DB')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;
