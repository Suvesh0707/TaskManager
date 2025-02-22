import mongoose from 'mongoose'

export const connectDb = async() =>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/task-manager`)
        console.log('Connected to MongoDB', connection.connection.host)
        } catch (error) {
            console.error('Error connecting to MongoDB:', error)
            }
}