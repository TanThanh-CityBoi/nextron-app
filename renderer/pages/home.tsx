import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import MainLayout from "@renderer/components/layouts/MainLayout";

function HomePage() {
   return (
      <Fragment>
         <Head>
            <title>Home - Nextron</title>
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
         <div className="flex justify-center items-center w-full">
            <h1>Home Page</h1>
         </div>
      </Fragment>
   );
}

HomePage.getLayout = (page) => {
   return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
