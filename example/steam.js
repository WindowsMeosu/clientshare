#!/usr/bin/env node
// import irc-steam-relay
// import fs
// import steam
const irc = require('irc');
const fs = require('fs');
const steam = require('steam');
var bot = new irc.Client('irc.servername', 'irc-nickname', {
  debug: true,
  channels: ['#channel', '#channel'],
});
// uses https://github.com/seishun/irc-steam-relay


var bot; on('loggedOn', () => {
  console.log('Logged in!');
  bot.setPersonaState(Steam.EPersonaState.Online); // to display your bot's status as "Online"
  bot.setPersonaName(''); // to change its nickname
  bot.joinChat('steamchatid)'); // the group's SteamID as a string
});
