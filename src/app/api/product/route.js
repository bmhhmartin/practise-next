import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

// export async function GET(req, res){
//
//     const {searchParams} = new URL(req.url);
//
//     const newID = searchParams.get("id");
//     const myCity = searchParams.get('city');
//
//     return NextResponse.json({
//         msg: newID, myCity
//     })
//
// }


// export async function POST(req, res){
//     // const reqBody = await req.json();
//
//     // let name = reqBody['id'];
//     // let city = reqBody['city'];
//
//     // return NextResponse.json({
//     //     name: name,
//     //     city: city
//     // })
//
//     const reqBody = await req.formData();
//
//     let id = reqBody.get('id');
//     let name = reqBody.get('name');
//
//     return NextResponse.json({
//         name: name,
//         id: id
//     })
// }


// export async function POST(req, res){
//     let headList = headers();
//     let accpetEncoding = headList.get('Accept-Encoding')
//
//     return NextResponse.json({
//         message: accpetEncoding
//     })
// }

// export async function POST(req, res){
//
//     let myCookie = req.cookies.get('my_token');
//
//     return NextResponse.json({
//         message: myCookie
//     })
// }

//Request part ends


// export async function POST(){
//     return NextResponse.json([
//         {
//             name: "Martin",
//             designation: "Software Engineer"
//         },{
//             name: "Tamal",
//             designation: "QA Engineer"
//         },{
//             name: "Suvo",
//             designation: "Software Engineer"
//         },
//
//     ],{
//         status: 201,
//         headers: {
//             'Set-Cookie' : `token = "3223", path="/blog", secure: "true"`
//         }
//     })
// }


export async function GET(){

    redirect("/")
}






