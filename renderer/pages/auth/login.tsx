import { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { IPC_MESSAGE } from "@common/ipc-message";

export default function Login() {
   const [user, setUser] = useState("none user");

   const hanleLogin = async () => {
      window.ipc.send(IPC_MESSAGE.LOGIN_SEND, {
         username: "admin",
         password: "123123",
      });
      window.ipc.on(IPC_MESSAGE.LOGIN_REPLY, (arg: any) => {
         setUser(arg);
      });
   };

   return (
      <Fragment>
         <Head>
            <title>Login - Nextron</title>
         </Head>
         <div className="grid grid-col-1 text-2xl w-full text-center">
            <div>
               <Image
                  className="ml-auto mr-auto"
                  src="/images/logo.png"
                  alt="Logo image"
                  width="256px"
                  height="256px"
               />
            </div>
         </div>
         <div className="my-5 w-full flex-wrap flex justify-center">
            {/* <Link href="/home">
               <a>Login to app</a>
            </Link> */}

            <button onClick={() => hanleLogin()}>Login</button>
         </div>

         <div>{JSON.stringify(user || "none res")}</div>
      </Fragment>
   );
}
