import { NextRequest, NextResponse } from "next/server";
const ejs = require("ejs")
import { protect } from "../auth";
import prisma from "../db";
import { sendEmail } from "../utils";

export async function POST(request: NextRequest) {
    try {
        let isAuthorized = protect(request)
        if (!isAuthorized) {
            return NextResponse.json({ message: "UnAuthorized", status: 401 })
        }
        const user = request.headers.get("user")
        const req = await request.json()
        const jsonUser = JSON.parse(user)

        console.log(jsonUser)

        console.log(req)

        const temp = {
            booking_user_id: jsonUser?.id,
            booking_hotel_id: parseInt(req?.hotel),
            booking_checkin_time: new Date(req?.checkInDate),
            booking_checkout_time: new Date(req?.checkOutDate),
            booking_adult_count: parseInt(req?.adults),
            booking_children_count: parseInt(req?.kids),
        }

        const res = await prisma.tnp_hotel_bookings.create({
            data: temp
        })

        if (res) {
            const emailOptions = {
                subject: "",
                text: "Your request has been recieved, Thank you for using TNP.",
                to: jsonUser?.email,
                from: process.env.USER_EMAIL,
            }
            await sendEmail(emailOptions)
    

            // @ts-ignore
            const partners = await prisma.tnp_agents.findMany({})
            const booking = await prisma.tnp_hotel_bookings.findUnique({
                where:{
                    booking_id: res?.booking_id
                },
                // @ts-ignore
                include:{
                    tnp_user:true,
                    tnp_hotels:true
                }
            })
            console.log(partners)
            console.log(booking)




            partners?.forEach(async (partner) => {
            const partnerEmailOptions = {
                subject: "New Hotel Booking Request",

                html: ejs.render(`
                                 <!DOCTYPE html>
<html lang="en">
<head>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>

<h2>New Hotel Booking Request</h2>
<h2>Booking Details</h2>

<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Hotel</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Booking ID</td>
    <td>${booking?.booking_id}</td>
  </tr>
  <tr>
    <td>Customer Id</td>
    <td>${booking?.booking_user_id}</td>
  </tr>
  <tr>
    <td>Customer Name</td>
    <td>${
        // @ts-ignore
        booking?.tnp_user?.name + " " + booking?.tnp_user?.lname}</td>
  </tr>
  <tr>
    <td>Customer Email</td>
    <td>${
        // @ts-ignore
        booking?.tnp_user?.email}</td>
  </tr>
  <tr>
    <td>Requested Hotel</td>
    <td>${
        // @ts-ignore
        booking?.tnp_hotels?.hotel_name}</td>
  </tr>
  <tr>
    <td>No of Adults</td>
    <td>${res?.booking_adult_count}</td>
  </tr>
  <tr>
    <td>No of Children</td>
    <td>${res?.booking_children_count}</td>
  </tr>
  <tr>
    <td>CheckIn time</td>
    <td>${res?.booking_checkin_time}</td>
  </tr>
  <tr>
    <td>CheckOut time</td>
    <td>${res?.booking_checkout_time}</td>
  </tr>
</table>

</body>
</html>
                                 `),
                to: partner?.agent_email,
                from: process.env.USER_EMAIL,
            }
                await sendEmail(partnerEmailOptions)
            })


            
        }


        return NextResponse.json({ message: "success", res, status: 200 });

    } catch (error) {
        console.error('Error in POST handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

