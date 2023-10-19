const Eris = require ("eris");
require ("dotenv").config ();

const bot = new Eris (process.env.DISCORD_TOKEN);

bot.on("ready", () => {

  console.log(`🎒🤖 BultoBot V-1.2.0\n......................\nRunning smoothly like Julio intended =)\nhttps://github.com/jjrh92/JulioBot_Discord`);

});

bot.on ("error", (err) => {

    console.error(err); 

});

bot.on ("messageCreate", (msg) => {

  if(msg.content === "/julio") {

    bot.createMessage (msg.channel.id, "reyes!");

  }

});

bot.connect();