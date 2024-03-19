import appIpcEventHandler from './app.ipc';
import categoryIpcEventHandler from './category.ipc';
import paymentIpcEventHandler from './payment.ipc';
import productEventHandler from './product.ipc';

function ipcEventHandler() {
    productEventHandler();
    appIpcEventHandler();
    categoryIpcEventHandler();
    paymentIpcEventHandler();
}

export default ipcEventHandler;
