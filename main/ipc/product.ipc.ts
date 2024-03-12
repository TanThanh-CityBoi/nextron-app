import { ipcMain } from 'electron';
import { IPC_MESSAGE } from '@/common/ipc.message';
import { products } from '@/common/mock-data';

function productEventHandler() {
    ipcMain.on(IPC_MESSAGE.GET_LIST_PRODUCTS, async (event) => {
        event.reply(IPC_MESSAGE.GET_LIST_PRODUCTS_REPLY, products);
    });
}

export default productEventHandler;
