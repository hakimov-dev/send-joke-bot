import axios from 'axios'
const env = require('dotenv').config({path: './.env'});

async function runBot(){
    const { data } = await axios.get(`${env.parsed.TELEGRAM_API}${env.parsed.BOT_TOKEN}/getUpdates`)

    data.forEach(user => {
        
    });
}

function sendMessage(message, chatID){
    var url = `${env.parsed.TELEGRAM_API}${env.parsed.BOT_TOKEN}/sendMessage?chat_id=${chatID}&text=${message}/`

    let oReq = new XMLHttpRequest();
         oReq.open("GET", url, true);
         oReq.send()
}