import { ipcMain } from 'electron';
import { IPC_MESSAGE } from '@/common/ipc-message';
import { LocalStorage } from '@/main/helpers';
import { products } from '@/mock-data';
import { MAX_CART_ITEMS, PURCHASE_STATUS } from '@/common/constants';

function productEventHandler() {
    ipcMain.on(IPC_MESSAGE.GET_LIST_PRODUCTS, async (event) => {
        let currentProducts = LocalStorage.getProducts();
        if (!currentProducts || !currentProducts?.length) {
            currentProducts = products;
            LocalStorage.setProducts(products);
        }
        event.reply(IPC_MESSAGE.GET_LIST_PRODUCTS_REPLY, currentProducts);
    });

    ipcMain.on(IPC_MESSAGE.ADD_TO_CART, async (event, arg) => {
        const purchageStatus = LocalStorage.get('purchage_status');
        if (purchageStatus && purchageStatus !== PURCHASE_STATUS.ORDER) {
            return;
        }
        //
        const cart = LocalStorage.getCart();
        if (cart.item_numbers === MAX_CART_ITEMS) {
            event.reply(IPC_MESSAGE.NOTIFICATION_MODEL_SHOW, {
                message_key: 'message.max_cart_items',
            });
            return;
        }
        let localProducts = LocalStorage.getProducts();

        if (!localProducts || !localProducts?.length) {
            localProducts = products;
            LocalStorage.setProducts(products);
        }

        const existedId = cart.items.findIndex((item) => item.id === arg.id);
        const existedIdProducts = localProducts.findIndex((item) => item.id === arg.id);
        if (existedId !== -1 && existedIdProducts !== -1) {
            if (localProducts?.[existedIdProducts].amount < 1) {
                return;
            }

            const newItems = {
                id: arg.id,
                amount: cart.items?.[existedId].amount + 1,
                price:
                    localProducts?.[existedIdProducts].sellPrice ||
                    localProducts?.[existedIdProducts].price,
                name_en: localProducts?.[existedIdProducts].name_en,
                name_vi: localProducts?.[existedIdProducts].name_vi,
                thumbnail: localProducts?.[existedIdProducts].thumbnail,
            };
            cart.items[existedId] = newItems;
            cart.item_numbers = cart.item_numbers + 1;
            cart.total = cart.total + newItems.price;

            localProducts[existedIdProducts].amount = localProducts?.[existedIdProducts].amount - 1;

            LocalStorage.setCart(cart);
            LocalStorage.setProducts(localProducts);

            event.reply(IPC_MESSAGE.GET_CART_ITEMS_REPLY, cart);
            event.reply(IPC_MESSAGE.GET_LIST_PRODUCTS_REPLY, localProducts);
            return;
        }

        const newItems = {
            id: arg.id,
            amount: 1,
            price:
                localProducts?.[existedIdProducts].sellPrice ||
                localProducts?.[existedIdProducts].price,
            name_en: localProducts?.[existedIdProducts].name_en,
            name_vi: localProducts?.[existedIdProducts].name_vi,
            thumbnail: localProducts?.[existedIdProducts].thumbnail,
        };

        cart.items.push(newItems);
        cart.item_numbers = cart.item_numbers + 1;
        cart.total = cart.total + newItems.price;

        localProducts[existedIdProducts].amount = localProducts?.[existedIdProducts].amount - 1;

        LocalStorage.setCart(cart);
        LocalStorage.setProducts(localProducts);

        event.reply(IPC_MESSAGE.GET_CART_ITEMS_REPLY, cart);
        event.reply(IPC_MESSAGE.GET_LIST_PRODUCTS_REPLY, localProducts);
    });

    ipcMain.on(IPC_MESSAGE.REMOVE_CART_ITEM, async (event, arg) => {
        const purchageStatus = LocalStorage.get('purchage_status');
        if (purchageStatus && purchageStatus !== PURCHASE_STATUS.ORDER) {
            return;
        }
        //
        const cart = LocalStorage.getCart();
        let localProducts = LocalStorage.getProducts();

        if (!localProducts || !localProducts?.length) {
            localProducts = products;
            LocalStorage.setProducts(products);
        }

        const existedId = cart.items.findIndex((item) => item.id === arg.id);
        const existedIdProducts = localProducts.findIndex((item) => item.id === arg.id);

        if (existedId !== -1 && existedIdProducts !== -1) {
            cart.item_numbers = cart.item_numbers - arg.amount;
            cart.total = cart.total - cart.items[existedId].price * arg.amount;

            if (cart.items[existedId].amount == arg.amount) {
                cart.items = cart.items.filter((val) => val.id !== arg.id);
            } else {
                cart.items[existedId].amount = cart.items[existedId].amount - arg.amount;
            }

            localProducts[existedIdProducts].amount =
                localProducts?.[existedIdProducts].amount + arg.amount;

            LocalStorage.setCart(cart);
            LocalStorage.setProducts(localProducts);

            event.reply(IPC_MESSAGE.GET_CART_ITEMS_REPLY, cart);
            event.reply(IPC_MESSAGE.GET_LIST_PRODUCTS_REPLY, localProducts);
            return;
        }

        return;
    });

    ipcMain.on(IPC_MESSAGE.GET_CART_ITEMS, async (event) => {
        const cart = LocalStorage.getCart();
        event.reply(IPC_MESSAGE.GET_CART_ITEMS_REPLY, cart);
    });

    ipcMain.on(IPC_MESSAGE.UPDATE_PURCHAGE_STATUS, async (event, arg) => {
        LocalStorage.set('purchage_status', arg?.status || PURCHASE_STATUS.ORDER);
    });
}

export default productEventHandler;
