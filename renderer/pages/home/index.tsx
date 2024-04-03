import { Fragment } from "react";
import Head from "next/head";

import MainLayout from "@components/layouts/MainLayout";
import ProductCartWrapper from "@components/product/ProductCartWrapper";
import Sectors from "@components/sectors/Sectors";
import { APP_DEFAULT_SETTINGS } from "@nextron-app/common";

function HomePage() {
    return (
        <Fragment>
            <Head>
                <title>Home - Nextron</title>
            </Head>
            <div
                className="flex-col flex h-full py-4"
                style={{ backgroundColor: APP_DEFAULT_SETTINGS.HOME_BACKGROUND }}
            >
                <Sectors></Sectors>
                <ProductCartWrapper></ProductCartWrapper>
            </div>
        </Fragment>
    );
}

HomePage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};



export default HomePage;
