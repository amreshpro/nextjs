

import bcryptjs from "bcryptjs"
import {connect} from '@/dbConfig/dbConfig';
import User from '@/models/UserModel';
import { NextRequest,NextResponse } from 'next/server';



// connecting to database
connect()


export async function POST(req:NextRequest,res:NextResponse){
try {
    
const reqBody = await req.json();
const {username,email,password} = reqBody
console.log(reqBody);

// check if user already exists
const user = await User.findOne({email})
if(user){
    return NextResponse.json({error:"User already exists"},{status:400})
}


// hash password
const salt = await bcryptjs.genSalt(10);
const hashPassword = await bcryptjs.hash(password, salt);



const newUser = new User({
    username,
    email, 
    password:hashPassword
})


const savedUser =await newUser.save();
console.log(savedUser)

return NextResponse.json({mesaage:"User created successfully",success:true,savedUser},{status:201})


} catch (error:any) {
  
    return NextResponse.json({error:error.message},{status:500});

    
}

}