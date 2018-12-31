const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`LastCodes - Script By : Ayman`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Ayman ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`GhastMc`,"http://twitch.tv/Ayman")
client.user.setStatus("dnd")
});
client.on("ready", () => {

          var interval = setInterval (function () {
client.channels.get('528870667731468308').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');
          }, 260);
  
          var interval = setInterval (function () {
  client.channels.get('528870667731468308').send('#daily');
  client.channels.get('528870667731468308').send('#rep <@528870667731468308>');  
          }, 86800000);
  
          var interval = setInterval (function () {
client.channels.get('528870667731468308').send('..!daily <@528870667731468308>');
client.channels.get('528870667731468308').send('..!rep <@528870667731468308>');
          }, 61360000);
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
