import axios from 'axios'
const env = require('dotenv').config({path: './.env'});

async function runBot(){
    const { data } = await axios.get(`${env.parsed.TELEGRAM_API}${env.parsed.BOT_TOKEN}/getUpdates`)
}