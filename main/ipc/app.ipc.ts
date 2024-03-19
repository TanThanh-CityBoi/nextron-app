import { ipcMain } from 'electron';
import { IPC_MESSAGE } from '@/common/ipc-message';
import { LocalStorage, STORAGE_KEYS } from '../helpers';

function appIpcEventHandler() {
    ipcMain.on(
        IPC_MESSAGE.CREATE_MODAL,
        async (
            event,
            arg: {
                ipc_message: string;
                sub: any;
            },
        ) => {
            event.reply(arg.ipc_message, { ...arg.sub });
        },
    );

    ipcMain.on(IPC_MESSAGE.WINDOW_ACTION_TRACK, (event, arg: { track_time: Date }) => {
        LocalStorage.set(STORAGE_KEYS.LAST_ACTION, arg?.track_time || new Date());
    });
}

export default appIpcEventHandler;
