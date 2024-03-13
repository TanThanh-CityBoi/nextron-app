import { app } from 'electron';
import path from 'path';

export const envConfig = {
    path: app.isPackaged
        ? path.join(process.resourcesPath, '.env')
        : path.resolve(process.cwd(), '.env'),
};
