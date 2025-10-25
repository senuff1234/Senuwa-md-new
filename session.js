//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                  𝗦𝗘𝗡𝗨𝗪𝗔-𝗠𝗗  𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//
//░██████╗███████╗███╗░░██╗██╗░░░██╗░██╗░░░░░░░██╗░█████╗░  ███╗░░░███╗██████╗░
//██╔════╝██╔════╝████╗░██║██║░░░██║░██║░░██╗░░██║██╔══██╗  ████╗░████║██╔══██╗
//╚█████╗░█████╗░░██╔██╗██║██║░░░██║░╚██╗████╗██╔╝███████║  ██╔████╔██║██║░░██║
//░╚═══██╗██╔══╝░░██║╚████║██║░░░██║░░████╔═████║░██╔══██║  ██║╚██╔╝██║██║░░██║
//██████╔╝███████╗██║░╚███║╚██████╔╝░░╚██╔╝░╚██╔╝░██║░░██║  ██║░╚═╝░██║██████╔╝
//╚═════╝░╚══════╝╚═╝░░╚══╝░╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝  ╚═╝░░░░░╚═╝╚═════╝░                                       
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : Sᴇɴᴜᴡᴀ ᴍᴅ
//  * @version      : 4.0
//  * @author       : Sasindu
//  * @youtube      : https://www.youtube.com/@gamingsenu-s71
//  * @description  : 𝗦𝗘𝗡𝗨𝗪𝗔-𝗠𝗗 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Sasindu.
//*
//*
//Base by Sasindu
//GitHub: @senuff1234
//WhatsApp: +94704206946
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@@gamingsenu-s71
//   * Created By GitHub: Sasindu
//   * Credit To Sasindu
//   * © 2025 𝗦𝗘𝗡𝗨𝗪𝗔-𝗠𝗗 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
PORT: process.env.PORT || "8000"
};
