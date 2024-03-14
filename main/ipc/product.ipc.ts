import { ipcMain } from 'electron';
import { IPC_MESSAGE } from '@/common/ipc.message';
import { products } from '@/common/mock-data';
import { LOCAL_STORAGE } from '../helpers';

function productEventHandler() {
    ipcMain.on(IPC_MESSAGE.GET_LIST_PRODUCTS, async (event) => {
        event.reply(IPC_MESSAGE.GET_LIST_PRODUCTS_REPLY, products);
    });

    ipcMain.on(IPC_MESSAGE.ADD_TO_CART, async (event, arg) => {
        const cart: any = LOCAL_STORAGE.get('cart') || [];
        cart.push(arg);
        LOCAL_STORAGE.set('cart', cart);

        event.reply(IPC_MESSAGE.ADD_TO_CART_REPLY, cart);
    });

    ipcMain.on(IPC_MESSAGE.GET_CART_ITEMS, async (event) => {
        const cart: any = LOCAL_STORAGE.get('cart') || [];

        event.reply(IPC_MESSAGE.GET_CART_ITEMS_REPLY, cart);
    });
}

export default productEventHandler;
