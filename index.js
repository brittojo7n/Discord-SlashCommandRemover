const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

(async () => {
    const rest = new REST({ version: '10' }).setToken(token);

    console.log('Attempting to delete all slash commands...');

    try {
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] });
        console.log('Successfully deleted all guild commands.');
    } catch (error) {
        console.error('Error deleting guild commands:', error.message);
    }

    try {
        await rest.put(Routes.applicationCommands(clientId), { body: [] });
        console.log('Successfully deleted all application commands (Global).');
    } catch (error) {
        console.error('Error deleting global commands:', error.message);
    }
})();
