import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

const Members = () => {
   return (
      <Fragment>
         <Head>
            <title>Members window</title>
         </Head>

         <div className="mt-1 w-full flex-wrap flex justify-center">
            <Link href="/home">
               <a className="btn-blue">Back to home</a>
            </Link>
         </div>
      </Fragment>
   );
};

Members.getLayout = (page) => {
   return <MainLayout>{page}</MainLayout>;
};

export default Members;
