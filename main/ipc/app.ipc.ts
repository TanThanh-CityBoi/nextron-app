import { ipcMain } from 'electron';
import { IPC_MESSAGE } from '@/common/ipc-message';

function appEventHandler() {
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
}

export default appEventHandler;
