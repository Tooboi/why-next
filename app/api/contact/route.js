// export async function POST(req, res) {

//     console.log(req.body);
//     res.status(200)({ message: 'Success' })
//   }

export default async function handler(req, res) {
    console.log(req.body);
  
    // Set the status code
    res.writeHead(200, { 'Content-Type': 'application/json' });
  
    // Send the response
    res.end(JSON.stringify({ message: 'Success' }));
  }
  
  // let nodemailer = require('nodemailer')
  // const transporter = nodemailer.createTransport({
  //     port: 465,
  //     host: "smtp.gmail.com",
  //     auth: {
  //       user: 'demo@demo.gmail',
  //       pass: 'password',
  //     },
  //     secure: true,
  //   })
  