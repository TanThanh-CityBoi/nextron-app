import appIpcEventHandler from './app.ipc';
import productEventHandler from './product.ipc';

function ipcEventHandler() {
    productEventHandler();
    appIpcEventHandler();
}

export default ipcEventHandler;
