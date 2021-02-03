import mongoose from 'mongoose'

// const DBCOLLECTION = "mongodb+srv://manoj123:silag123@cluster0.vzxir.mongodb.net/mansil?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DBCOLLECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
