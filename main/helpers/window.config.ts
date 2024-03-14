import { envConfig } from '@/common/env.config';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config(envConfig);

const isProd = process.env.NODE_ENV === 'production';

const ProdConfig: Electron.BrowserWindowConstructorOptions = {
    fullscreen: true,
    alwaysOnTop: true,
    titleBarStyle: 'hidden',

    webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
    },
};

const DevConfig: Electron.BrowserWindowConstructorOptions = {
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
    },
};

export const windowConfig = isProd ? ProdConfig : DevConfig;
