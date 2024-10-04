import { app } from 'electron';
import { autoUpdater } from 'electron-updater';

import { createWindow, setAppPath } from '@/main/helpers';
import { ENV_CONFIG, WINDOW_CONFIG } from '@/main/configs';

import * as dotenv from 'dotenv';
dotenv.config(ENV_CONFIG);
//
const isProd = process.env.NODE_ENV === 'production';
setAppPath(isProd);
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const FEED_URL =
    'https://github.com/TanThanh-CityBoi/nextron-app/releases/download/v1.0.0/nextron-app_1.0.0_amd64.deb';

// create app
(async () => {
    await app.whenReady();
    const mainWindow = createWindow('main', WINDOW_CONFIG);

    if (isProd) {
        await mainWindow.loadURL('app://./sleep');
    } else {
        const port = process.argv[2];
        await mainWindow.loadURL(`http://localhost:${port}/sleep`);
        // mainWindow.webContents.openDevTools();
    }

    autoUpdater.setFeedURL(FEED_URL);
    autoUpdater.checkForUpdatesAndNotify();

    autoUpdater.on('update-available', () => {
        console.log('Update available');
    });

    autoUpdater.on('update-downloaded', () => {
        autoUpdater.quitAndInstall();
    });
})();

