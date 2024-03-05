import { Fragment } from "react";
import Head from "next/head";
import MainLayout from "../../components/layouts/MainLayout";

const News = () => {
   return (
      <Fragment>
         <Head>
            <title>News Managerment</title>
         </Head>

         <div>
            <h1 className="text-center">News Page</h1>
         </div>
      </Fragment>
   );
};

News.getLayout = (page) => {
   return <MainLayout>{page}</MainLayout>;
};

export default News;
