const nodemailer = require("nodemailer");





async function main(token) {
    const html = `
    <h1>Hello World</h1>
    <p>nodemailer useful</p>
    <a href="http://localhost:5000/verify?token=${token}">Verify Link</a>

`;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port : 587,
        secure : false,
        auth : {
            user : 'myrtle.bode28@ethereal.email',
            pass : 'awr7cQt1pSAW7RUzf4'
        }
    });

    const info = await transporter.sendMail({
        from : 'deneme@info.com',
        to : 'myrtle.bode28@ethereal.email',
        subject : 'Testing, testing 123',
        html : html,
    })
    console.log("Message sent :" + info.messageId);
}


module.exports = main