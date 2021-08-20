const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎PINKY😎═════╗*\n\n*⚜═PINKY═⚜*\n\n*Owner:- Dark Evil - http://Wa.me/+94781564565*\n* *\n🔰YouTube:- *https://www.youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ*\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═PINKY Owner ═Dark Evil💥*\n\n*💘 https://github.com/*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/Figlet*    *\n\n⚜yt link to set bot:- https://www.youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎PINKY😎═════╗*\n\n*⚜═PINKY═⚜*\n\n*Owner:- Dark Evil - http://Wa.me/+94781564565*\n* *\n🔰YouTube:- *https://www.youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ*\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n"
    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═PINKY Owner ═Dark Evil💥*\n\n*💘 https://github.com/*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/Figlet*    *\n\n⚜yt link to set bot:- https://www.youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ
    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

