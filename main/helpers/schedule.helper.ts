import schedule from 'node-schedule';
import { powerMonitor } from 'electron';

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

export { reloadSchedule };
