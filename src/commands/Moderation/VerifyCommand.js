const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'Moderation', []);
  }

  async run(client, message, args) {
    const verifyRole = message.guild.roles.cache.get('817119538998804511');
    await message.member.roles.add(verifyRole.id).catch(err => console. log(err));
  }
}