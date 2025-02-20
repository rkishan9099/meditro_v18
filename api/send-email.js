const nodemailer = require("nodemailer");


export default async function handler(req, res) {
  if(req.method === "POST") {
      console.log(req.body)
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com", // Hostinger SMTP server
        port: 587, // Use 465 for SSL, 587 for TLS
        secure: false, // true for SSL, false for TLS
        auth: {
          user:"info@keymedsolution.com",// "info@keymedsolution.com", // Your Hostinger email
          pass: "India@2025",//India@2025", // Your Hostinger email password
        },
        tls: {
          rejectUnauthorized: false, // Prevents SSL issues
        },
      });


      const { name, email, phone, practice } = req.body;

      const mailOptions = {
        from: '"KeyMed Solution" <info@keymedsolution.com>', // Sender name & email
        to: "info@keymedsolution.com", // Recipient email
        subject: "New Evaluation Form Submission",
        html: `
          <h1>New Evaluation Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Practice Name:</strong> ${practice}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'SUCCESS' });
    } catch (error) {
      res.status(200).json({ status: 'FAILURE', error });
    }

  }
}


