import path from 'path';

export const windowConfig: Electron.BrowserWindowConstructorOptions = {
    fullscreen: true,
    alwaysOnTop: true,
    titleBarStyle: 'hidden',

    webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
    },
};
