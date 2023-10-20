const description = '/metar "icao"';

const { codeBlock } = require ('discord.js');

const jsString = `Metar`;

const highlighted = codeBlock('js', jsString);


const init = (interaction, client) => {
    
    interaction.reply(`${highlighted}`)
}

module.exports = { init, description }