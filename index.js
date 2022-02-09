import { run } from "./src/main.js";
import { Bot } from "@tenbot/bot";

const bot = new Bot({
  name: 'message-bot',
  webhook: process.env.BOT_WEBHOOK,
})

const DEFAULT_STEP_SIZE = "5000-15000";

// 获取环境变量
const config = {
  username: process.env.XIAOMI_AMAZFIT_USERNAME,
  password: process.env.XIAOMI_AMAZFIT_PASSWORD,
  user_id: process.env.XIAOMI_AMAZFIT_USER_ID,
  app_token: process.env.XIAOMI_AMAZFIT_APP_TOKEN,
  step_size: process.env.STED_SIZE_RANGE ?? DEFAULT_STEP_SIZE,
};

const step = await run(config);
const rtxName = process.env.RTXNAME
bot.sendText({ content: `${rtxName}今日步数已更新: ${step}步` });
