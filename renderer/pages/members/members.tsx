import { Fragment } from "react";
import Head from "next/head";

import MainLayout from "@renderer/components/layouts/MainLayout";

const Members = () => {
   return (
      <Fragment>
         <Head>
            <title>Members</title>
         </Head>

         <div>
            <h1 className="text-center">User Managerment</h1>
         </div>
      </Fragment>
   );
};

Members.getLayout = (page) => {
   return <MainLayout>{page}</MainLayout>;
};

export default Members;
