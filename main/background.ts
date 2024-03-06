import { app, powerMonitor } from "electron";
import serve from "electron-serve";
import schedule from "node-schedule";
import path from "path";

import { createWindow } from "./helpers";
import ipcEventHandler from "./ipc";

import * as dotenv from "dotenv";
dotenv.config({
   path: app.isPackaged
      ? path.join(process.resourcesPath, ".env")
      : path.resolve(process.cwd(), ".env"),
});

//
const isProd = process.env.NODE_ENV === "production";
if (isProd) {
   serve({ directory: "app" });
} else {
   app.setPath("userData", `${app.getPath("userData")} (development)`);
}

//
(async () => {
   await app.whenReady();

   const mainWindow = createWindow("main", {
      width: 1000,
      height: 600,
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: true,

         preload: path.join(__dirname, "preload.js"),
      },
   });

   if (isProd) {
      await mainWindow.loadURL("app://./auth/login");
   } else {
      const port = process.argv[2];
      await mainWindow.loadURL(`http://localhost:${port}/auth/login`);
      mainWindow.webContents.openDevTools();
   }
   // Reload app
   const scheduledJob = schedule.scheduleJob("0 1 * * *", () => {
      mainWindow.reload();
   });

   powerMonitor.on("resume", () => {
      console.log("resumed!");
      scheduledJob.reschedule("0 1 * * *");
   });

   powerMonitor.on("suspend", () => {
      console.log("suspended");
      scheduledJob.cancel();
   });
})();

app.on("window-all-closed", () => {
   app.quit();
});

ipcEventHandler();
