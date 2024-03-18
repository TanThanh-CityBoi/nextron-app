import schedule from 'node-schedule';
import { powerMonitor } from 'electron';
import { ENV_CONFIG } from '@/common/env.config';

import * as dotenv from 'dotenv';
dotenv.config(ENV_CONFIG);
//
const isProd = process.env.NODE_ENV === 'production';

const reloadSchedule = (mainWindow) => {
    const scheduledJob = schedule.scheduleJob('0 1 * * *', () => {
        mainWindow.reload();
    });

    powerMonitor.on('resume', () => {
        console.log('resumed!');
        scheduledJob.reschedule('0 1 * * *');
    });

    powerMonitor.on('suspend', () => {
        console.log('suspended');
        scheduledJob.cancel();
    });
};

const sleepSchedule = (mainWindow) => {
    const scheduledJob = schedule.scheduleJob('*/10 * * * * *', async () => {
        if (isProd) {
            await mainWindow.loadURL('app://./sleep-page');
        } else {
            const port = process.argv[2];
            await mainWindow.loadURL(`http://localhost:${port}/sleep-page`);
        }
    });

    mainWindow.on('focus', () => {
        console.log('focusss');
        scheduledJob.cancel();
        // scheduledJob.reSchedule('*/10 * * * * *');
    });

    mainWindow.on('blur', () => {
        console.log('blurrrrrr');

        scheduledJob.reschedule('*/10 * * * * *');
    });

    // powerMonitor.on('resume', () => {
    //     console.log('sleep resumed!');
    //     // scheduledJob.reschedule('*/10 * * * * *');
    // });

    // powerMonitor.on('suspend', () => {
    //     console.log('sleep suspended');
    //     // scheduledJob.cancel();
    //     scheduledJob.reschedule('*/10 * * * * *');
    // });
};
export { reloadSchedule, sleepSchedule };
