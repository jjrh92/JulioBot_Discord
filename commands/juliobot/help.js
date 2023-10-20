const { codeBlock } = require('discord.js');

const jsString = `
🎒🤖 BultoBot V-1.2.0
Comandos Disponibles:
/metar "icao"
/clima "ciudad"
/gpt "consulta"`;

const highlighted = codeBlock('js', jsString);

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName ('help')
		.setDescription('Mostrar comandos disponibles.'),
	async execute(interaction) {
		return interaction.reply('Disponibles!');
	},
};