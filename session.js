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
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0EwOWZzNmRxY3FwZGNUTW9yU0dNU2xwV1VpVDJqNHNKYk5Jd3lod01ucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1NSQ1lmRkg0dEZDRXVaY1ovcmdtQ1ZZVTBRdThEbk9lNEtEZDN5ZG9UUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQzd2Y2RjblpwbkIvcUxlZmZzeGtJMnEwS2VpZWt6MzhSZ0tsY3ovRzBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTMWMvNGp1MHdXM2VxZ1grWURNN3BvbEhqcDNXOENyb3BDNkUwR3BuTmc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1NRlFyazJKYkhRVVhBN1BtVDQvKzBxdVM1aGJSS083VkpBOVl5U1lXazA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEbXNqOERUWVFYV1ozeXZLZXJsQmx3blh0elFsaDZPZlF6clpNV0dReHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01UMGJvdU9nOWJMWTNzNXp5UklqYjFPS04rZldKN20yNUtWWWZ4V25sbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHk0MlNlU3ZPdDBVSXZaZTdWTzZvRktrdDVaRlNCWG00ZjRkeCtaaXRWQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNJRHRwdGdFWFprRXdBd0N1WGlXWWtEU01lQzdNbVV5UHlOemo1K3hhaDNVUjZURVFmSWlPUmJGajUvNTZobHoxYWZOeVpOQnQ2RmtLajd3UDgrQWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJtVHIwOGNicGlBMXN3ZzFsNVcwYzZWRUE4ZkFoTFlqdWd0eHlwMjBkY0pNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA0MjA2OTQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NEFENDdDRjc3QzU5NzAyNjQ4QzMxMjBGQUQ3QjZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE0MzE0Njh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imo1QS0xcFMwVDJtaFFzNXp1emFYLVEiLCJwaG9uZUlkIjoiODRkZjIzNTQtMGNkNi00M2QwLWJjYjItZGM3MDM2YmViMjk0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1nVGxhU25zTzltOVoraXB5NzlpSWFFSngwRT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhuUlZzWVNjbFVLbmxwei8vWG5rVUFGeWpVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGZ3ekt3SEVLV2Y5Y2NHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVncxdjUrZlE0aWtGUTZoVzlRV0o2a2t5L1J2STE5T1NabXlPN1JaUVRUbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVk1uOEt6Ti9CeGg2RVNoOEprNmNUaVBOQVRqRG50S0FJaFhUR21JRW4yVnFscTZRZGJzNHpDMXRReVVNNXIrVGczbnh0aUdkUmFkVTVsUEdvZ0R6Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImU0MnMrTnZvVUJCdVRxUkhwc1FyZ0lUN1dJUEt2alYrdWFwZmxNNE96Z2FFWUsrYzVPWmhySnh1UE9ETzlYblhwR1RRSjVxM3I3Nm1SZGtaYXFlWmp3PT0ifSwibWUiOnsiaWQiOiI5NDcwNDIwNjk0NjoyMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJH4bSA4bSNyarJtMmiIFPhtIfJtOG0nOG0oeG0gCIsImxpZCI6IjEwMzY2MzkzNDYzNjEyNjoyMkBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDQyMDY5NDY6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmNOYitmbjBPSXBCVU9vVnZVRmllcEpNdjBieU5mVGttWnNqdTBXVUUwNiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxNDMxNDY0LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVpcyJ9",
PORT: process.env.PORT || "8000"
};
