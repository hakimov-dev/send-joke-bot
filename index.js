const axios = require('axios').default;
const env = require('dotenv').config({path: './.env'});
var XMLHttpRequest = require('xhr2');

async function runBot(){
    try{

    }catch(error){
        console.log(error)
    }
}

function sendMessage(message){
    var url = `${env.parsed.TELEGRAM_API}${env.parsed.BOT_TOKEN}/sendMessage?chat_id=${chatID}&text=${message}`

    let oReq = new XMLHttpRequest();
         oReq.open("GET", url, true);
         oReq.send()
}

// setInterval(() => {
  runBot()
// }, 1000);