import appEventHandler from './app.ipc';
import productEventHandler from './product.ipc';

function ipcEventHandler() {
    productEventHandler();
    appEventHandler();
}

export default ipcEventHandler;
