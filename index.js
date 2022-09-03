const axios = require('axios').default;
const env = require('dotenv').config({path: './.env'});

async function runBot(){
    const { data } = await axios.get(`${env.parsed.TELEGRAM_API}${env.parsed.BOT_TOKEN}/getUpdates`)
    
    data.result.forEach(user => {
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

runBot()