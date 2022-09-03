import axios from 'axios'
const env = require('dotenv').config({path: './.env'});
var codeRun = true

async function runBot(){
    const { data } = await axios.get(`${env.parsed.TELEGRAM_API}${env.parsed.BOT_TOKEN}/getUpdates`)

    data.forEach(user => {
        if(user.text == '/user' || user.text == '/send-humor'){
         console.log('hello')
        }else{
          sendMessage("Sorry, I didn't understand you...)", user.message.from.id)
          console.log(user)
        }
    });
}

function sendMessage(message, chatID){
    var url = `${env.parsed.TELEGRAM_API}${env.parsed.BOT_TOKEN}/sendMessage?chat_id=${chatID}&text=${message}/`

    let oReq = new XMLHttpRequest();
         oReq.open("GET", url, true);
         oReq.send()
}