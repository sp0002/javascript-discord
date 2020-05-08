const dis = require('discord.js');
const bot = new dis.Client();

"use strict";
bot.login('bm90IGFjdHVhbGx5IGEgZGlzY29yZCBib3QgdG9rZW4gbG1hbw==');

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});


bot.on('message', msg => {
    if (msg.content.startsWith("jss`")) {
        let run_code = msg.content.split("`");
        if (run_code.length >= 3){
            run_code = run_code[1];
            let output_to_send = '';
            let processed_code = '';
            if (run_code.includes("console.log")){
                processed_code = run_code.replace(/console.log/g, 'output_to_send += ' + '`\\n` + String');
            }
            try {
                eval(processed_code);
            } catch(err) {
                msg.channel.send('Error:' + err);
            }
            msg.channel.send('Output:' + output_to_send + '\n==========================');
        } 
    } else if (msg.content.startsWith("jss```")) {
        let run_code = msg.content.split("```");
        if (run_code.length >= 3){
            run_code = run_code[1];
            let output_to_send = '';
            let processed_code = '';
            if (run_code.includes("console.log")){
                processed_code = run_code.replace(/console.log/g, 'output_to_send += ' + '`\\n` + String');
            }
            
            try {
                eval(processed_code);
            } catch(err) {
                msg.channel.send('Error:' + err);
            }
            msg.channel.send('Output:' + output_to_send + '\n==========================');
        } 
    }
});
