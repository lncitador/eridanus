import { config } from "dotenv";

import { startServer } from "@article";

config();
startServer(Number(process.env.SERVER_PORT));
