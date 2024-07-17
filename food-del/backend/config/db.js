import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://anihgrace200:AO4DKqvMGsSoJuIf@cluster0.dx4vju1.mongodb.net/ama-foodapp').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.