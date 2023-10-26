import mongoose, { connection } from "mongoose";


export async function connect() {

    try {

        mongoose.connect(process.env.MONGO_URL!);
        const connection = await mongoose.connection;
        connection.on('connected', () => {
            console.log(`MongoDB connection established Successfully`);
        })

        connection.on('error', (err) => {
            console.log(`MongoDB connection error. Please make sure MongoDB is running properly`);
            console.log(err);
            process.exit();

        })

    } catch (error) {

        console.log(`Something went wrong  in connection ${error}`)

        console.log(`${error}`)
    }


}