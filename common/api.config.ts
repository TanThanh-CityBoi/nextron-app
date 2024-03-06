import { app } from "electron";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({
   path: app.isPackaged
      ? path.join(process.resourcesPath, ".env")
      : path.resolve(process.cwd(), ".env"),
});

export const API_CONFIG = {
   API_URL: process.env.API_URL || "http://localhost:4000/api",
};
