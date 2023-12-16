const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.DB_URI)

        console.log(`Database connectet ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB