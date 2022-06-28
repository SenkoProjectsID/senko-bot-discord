// Require the necessary discord.js classes
const { Client, Intents, MessageAttachment } = require('discord.js');
const express = require('express');
const app = express();
const port = 3001;
app.listen(3000)
app.get('/', (req, res) => res.send(`Senko Ready to use`));

const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require('discord.js');
//app.listen(port, () => console.log(`Senko-bot Running http://localhost:${port}`));
// Create a new client instance
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_VOICE_STATES"] });

let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle("**ROLE: GENDER**")
    .setDescription(":boy: <@&981552479474950196>\n:girl:  <@&981552330749136937> (Test Voice)")
//.setFooter("NexaCorp")
let button = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('male')
                .setEmoji("👦")
                .setLabel('male')
                .setStyle('PRIMARY')
            )
    
        // When the client is ready, run this code (only once)
        client.once('ready', () => {
            console.log('Ready!')
        })

client.on("messageCreate", (message) => {
            //if (message.author.id !== 754192220843802664 || 893376686383583283) return;
            if (message.content.startsWith("role")) {
                message.channel.send({ embeds: [embed], components: [button] })
            }

        })


client.on("interactionCreate", (interaction) => {
            console.log(interaction.customId)
            if (!interaction.isButton()) return;

            if (interaction.customId === "ev") {
                interaction.member.roles.add("981550305428766751")
                interaction.reply({ content: "Add role Event Ping", ephemeral: true })
            }
            if (interaction.customId === "ann") {
                interaction.member.roles.add("981549980332478486")
                interaction.reply({ content: "Add role Announcement ping", ephemeral: true })
            }
  if (interaction.customId === "male") {
                interaction.member.roles.add("981552479474950196")
                interaction.reply({ content: "Add role Male", ephemeral: true })
            }
        })
client.login(process.env.TOKEN);
