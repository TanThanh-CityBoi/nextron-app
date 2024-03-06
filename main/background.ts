import path from 'path'
import { app } from "electron";
import serve from "electron-serve";

import { createWindow } from "./helpers";
import ipcEventHandler from "./ipc";

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
   serve({ directory: "app" });
} else {
   app.setPath("userData", `${app.getPath("userData")} (development)`);
}

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
})();

app.on("window-all-closed", () => {
   app.quit();
});

ipcEventHandler();
