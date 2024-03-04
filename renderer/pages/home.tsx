import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import RootLayout from "../components/layouts/root-layout";

function HomePage() {
   return (
      <React.Fragment>
         <Head>
            <title>Home - Nextrons</title>
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
            <Link href="/profile/profile">
               <a className="btn-blue">Go to profile</a>
            </Link>
         </div>

         <div className="mt-1 w-full flex-wrap flex justify-center">
            <Link href="/members/members">
               <a className="btn-blue">Go to members page</a>
            </Link>
         </div>
      </React.Fragment>
   );
}

HomePage.getLayout = (page) => {
   return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
