//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349131904442";
global.owner = process.env.OWNER_NUMBER || "2349131904442";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5nSFJJRUUwd29TaVExQWxuejNqb1hlVWVpd0ZmYmNEczdFNGxHSjZVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEVyV2YxcjlobnpObzRyOEpFZTNOQllYdTFZWEJGNnF3eFNWRWFXMTBtVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SWs2MHo4QUdOektmaEt5am9ubWpUYXdrbFJnQUpOUTIwY2hmM3UzZmtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTE1nb2VmaUplYWZ3TW1rbHBZK3lTeXhseHBKS0hSQkcza3FwK29zUGpNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNNMjFTZ1k1d0tHNytoUGdsM1dsbjA4RzZrZEcyOXdvRnJ4ck5VUG56MzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9hdERMZkVibWhiUEI3QmxpS2VXWlZZamNtYWk1bERvWTk5U0pVbVJpbmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUYzbnpqTGVuMGxoTHgwNnBJUjR3c0hLcjJ4c2wyT2oveVFPd2JSNzRtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieW5lQytqeGFSS24zWmdqYzRuYWRiMUxwZkI1eDNPZEN5b0JlUlNnK0lpcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo4UGE2Q3U4QmNrbllOUnpXUHZpNjgyaVhQL2hjMzl3L0E0YUJ0cnNJVlF5dG5FdDBzVkk0L1FKTGd6SzNKU2hZc3RpVzRXVHBLNUR1QUtQdUpOSkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiIvTFZNT0ZPZ1BuOVUvTmJzMHh3TzhpQmQ1WnVCWFhEaDhLVmxDL01JZEtNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJY3dqcE9VS1R4VzFKYmhybjhyWXdRIiwicGhvbmVJZCI6Ijg0MTY2ODU3LTY0MjYtNDM0MC1hNmYyLTg0NDI5NWE1ZjQ1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCRFR2Q1Vvc3E1NlB5djcrNml0RHdNV0h3L1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1BMXZ5a05LQjlFUDB2YWNpM05vRlgyaVo4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjcyMzhGUTlDIiwibWUiOnsiaWQiOiIyMzQ5MTMxOTA0NDQyOjMyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsKxQ8OYTVJBRPCdkIQgRPCdkITwnZCSVElOWcKxIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYUEyNWdDRU1IVzlMb0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZd0g2ZGU2bXFURkhqY0w0QkxhcFdCWDFnejg2Z3Y4eEhIbmhwV3dtNlRJPSIsImFjY291bnRTaWduYXR1cmUiOiJCSUlaZ2FOK0xBenVlbTRaTDhZem9WUE1wdzd0M3pKajFyVWNlRG03NDcwdzlEdkI0eXVORmdLVmhDRWh6SUtUODllOEp2WnFJbDNMV0pUTkl3bmVEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUG83bGJtZEs5SVdzZ1J5bDJwSll6aWJ3YWk4ZUExN1hYU3dyU3lrSExSZVl1WWd1SjE3RzBvY2RFQk1pWmdKNmN3cVc3dHMzdE0rR0orQ1ZUcTdBQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTMxOTA0NDQyOjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldNQituWHVwcWt4UjQzQytBUzJxVmdWOVlNL09vTC9NUng1NGFWc0p1a3kifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQxNTkxODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1k0In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
