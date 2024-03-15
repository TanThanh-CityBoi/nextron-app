import { app } from 'electron';
import serve from 'electron-serve';

import { LocalStorage, createWindow, reloadSchedule } from '@main/helpers';
import { windowConfig } from '@/main/helpers/window.config';
import { envConfig } from '@/common/env.config';
import ipcEventHandler from './ipc';

import * as dotenv from 'dotenv';
dotenv.config(envConfig);

//
const isProd = process.env.NODE_ENV === 'production';
if (isProd) {
    serve({ directory: 'app' });
} else {
    app.setPath('userData', `${app.getPath('userData')} (development)`);
}

//
(async () => {
    await app.whenReady();
    const mainWindow = createWindow('main', windowConfig);

    if (isProd) {
        await mainWindow.loadURL('app://./home');
    } else {
        const port = process.argv[2];
        await mainWindow.loadURL(`http://localhost:${port}/home`);
        mainWindow.webContents.openDevTools();
    }
    // Reload app
    reloadSchedule(mainWindow);
})();

app.on('window-all-closed', () => {
    LocalStorage.clear();
    app.quit();
});

ipcEventHandler();
