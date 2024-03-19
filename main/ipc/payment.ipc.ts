import { ipcMain } from 'electron';
import { IPC_MESSAGE } from '@/common/ipc-message';
import { paymentMethods } from '@/mock-data';

function paymentIpcEventHandler() {
    ipcMain.on(IPC_MESSAGE.GET_PAYMENT_METHODS, (event) => {
        event.reply(IPC_MESSAGE.GET_PAYMENT_METHODS_REPLY, { paymentMethods });
    });
}

export default paymentIpcEventHandler;
