const axios = require('axios').default;
const env = require('dotenv').config({path: './.env'});
var XMLHttpRequest = require('xhr2');

async function runBot(){
    try{
     const { data } = await axios.get(env.parsed.JOKE_API)
     const message = `${data.category} %0A %0A ${data.joke} %0A %0A Jokes: @jokes_by_robot`
      sendMessage(message)
    }catch(error){
        console.log(error)
    }
}

function sendMessage(message){
    var url = `${env.parsed.TELEGRAM_API}${env.parsed.BOT_TOKEN}/sendMessage?chat_id=${env.parsed.CHANEL_ID}&text=${message}`

    let oReq = new XMLHttpRequest();
         oReq.open("GET", url, true);
         oReq.send()
}

// setInterval(() => {
  runBot()
// }, 1000);