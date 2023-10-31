import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";



// connecting to database
// connect()


export async function GET(req: NextRequest, res: NextResponse) {
    try {

        const allDataFromDatabase = await User.find({});

        console.log(allDataFromDatabase)

    return NextResponse.json({
            data: allDataFromDatabase,
            success: true
        });


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}