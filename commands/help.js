const description = 'Muestra los comandos disponibles'

const { codeBlock } = require('discord.js');

const jsString = `
🎒🤖 BultoBot V-1.2.0
Comandos Disponibles:
/metar "icao"
/clima "ciudad"
/gpt "consulta"`;

const highlighted = codeBlock('js', jsString);

const init = (interaction, client) => {
    
    interaction.reply(`${highlighted}`)
}

module.exports = { init, description }
