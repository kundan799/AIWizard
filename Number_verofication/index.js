require('dotenv').config()
const otpGen = require("otp-generator")
let otp = otpGen.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets:
     false, specialChars: false })

var sid =process.env.SID;
var auth_token =process.env.AUTH_TOKEN;
var twilio = require("twilio")(sid, auth_token);

twilio.messages
    .create({
        from:"+12543313770",
        to:"+918271187435",
        body: `this is testing otp is ${otp}`,
    })
    .then(function (res) { console.log("message has sent!") })
    .catch(function (err) {
        console.log(err);
    });