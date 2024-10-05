const mongoose =require('mongoose');

const connectDB = async()=>{
    try {
        const connect = mongoose.connect(
            'mongodb+srv://anirudhamane45:LMS%40DB@lms01cluster.lwhwz.mongodb.net/Users'
        );

        console.log('MongoDB connected');

    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;