import { Fragment } from "react";
import Head from "next/head";
import MainLayout from "@renderer/components/layouts/MainLayout";

const Profile = () => {
   return (
      <Fragment>
         <Head>
            <title>Your Profile</title>
         </Head>

         <div>
            <h1 className="text-center">Profile Page</h1>
         </div>
      </Fragment>
   );
};

Profile.getLayout = (page) => {
   return <MainLayout>{page}</MainLayout>;
};

export default Profile;
