const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Bot information'),
  async execute(interaction, client) {
    const embed = new client.discord.MessageEmbed()
      .setColor('6d6ee8')
      .setDescription('Developed by refactoringg')
      // .setDescription('Developed by refactoring`\n\n[`Github`](https://github.com/blackknight683) | [`Twitch`](https://www.twitch.tv/oofydaoofer) | [`Discord`](https://discord.gg/S2GGa23) | [`Youtube`](https://youtube.com/c/BlackKnight683)')
      .setFooter('© 2023 Apple Development', client.user.avatarURL())
      .setTimestamp();
    await interaction.reply({
      embeds: [embed]
    });
  },
};