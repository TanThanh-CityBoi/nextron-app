import { ipcMain } from 'electron';
import { IPC_MESSAGE } from '@/common/ipc-message';
import { sectors } from '@/mock-data';

function categoryIpcEventHandler() {
    ipcMain.on(IPC_MESSAGE.GET_LIST_CATEGORIES, (event) => {
        event.reply(IPC_MESSAGE.GET_LIST_CATEGORIES_REPLY, { categories: sectors });
    });
}

export default categoryIpcEventHandler;
