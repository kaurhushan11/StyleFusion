var nodemailer=require('nodemailer');
async function sendVarifyMail(to_email)
{
let transporter=nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port:465,
    secure:false,
    auth:{
        user:"hushanpreet110703@gmail.com",
        pass:"cwvmozdxbeziwrcz"
    }
});
let info= await transporter.sendMail({
    to:to_email,
    from:"hushanpreet110703@gmail.com",
    subject:"StyleFusion NewsLetter",
    html:"<h2>Thank You! You successfully subscribed to StyleFusion NewsLetter</h2>"
});
if(info.messageId)
    return true;
else
    return false;
}
module.exports=sendVarifyMail;