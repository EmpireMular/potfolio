import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

    const {
      first_name,
      last_name,
      email,
     
      company_name,
      help,
      company_size,
      info,
    } = await req.json();


      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "udoyebismack73@gmail.com",
          pass: "onxj guoo qkar lwxq",
        },
      });

      const mailOptions = {
        from: email,
        to: "udoyebismack73@gmail.com",
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>First Name: ${first_name}</p>
                    <p>Last Name: ${last_name}</p>
                    <p>Work Email: ${email}</p>
                
                    <p>Company Name: ${company_name}</p>
                    <p>Company Size: ${company_size}</p>
                    <p>Help: ${help}</p>
                
                    <p>Info: ${info}</p>
                `,
      };

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}





// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { first_name, last_name, email, company_name, help, company_size, info } = req.body;

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: udoyebismack73@gmail.com, // Use environment variables!
//         pass: onxj guoo qkar lwxq,
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: udoyebismack73@gmail.com,
//       subject: "Contact Form Submission",
//       html: `
//         <h1>Contact Form</h1>
//         <p>First Name: ${first_name}</p>
//         <p>Last Name: ${last_name}</p>
//         <p>Work Email: ${email}</p>
//         <p>Company Name: ${company_name}</p>
//         <p>Company Size: ${company_size}</p>
//         <p>Help: ${help}</p>
//         <p>Info: ${info}</p>
//       `,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "email has been sent" });
//     } catch (error) {
//       res.status(500).json({ message: "email has not been sent" });
//     }
//   } else {
//     res.status(405).json({ message: "method not allowed" });
//   }
// }