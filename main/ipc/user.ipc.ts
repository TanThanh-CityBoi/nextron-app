import { ipcMain } from "electron";
import { userAPI } from "@main/api";
import { IPC_MESSAGE } from "@common/ipc-message";

function userEventHandler() {
   ipcMain.on(IPC_MESSAGE.LOGIN_SEND, async (event, arg) => {
      userAPI
         .login({
            username: arg?.username,
            password: arg?.password,
         })
         .then((data) => {
            event.reply(IPC_MESSAGE.LOGIN_REPLY, data?.data);
         })
         .catch((error) => {
            event.reply(IPC_MESSAGE.LOGIN_REPLY, error);
         });
   });
}

export default userEventHandler;
