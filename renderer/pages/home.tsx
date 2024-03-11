import { Fragment } from 'react';
import Head from 'next/head';

import MainLayout from '../components/layouts/MainLayout';
import Sectors from '../components/sectors/Sectors';
import ProductCatalog from '../components/product/ProductCatalog';

function HomePage() {
    return (
        <Fragment>
            <Head>
                <title>Home - Nextron</title>
            </Head>
            <div className="">
                <Sectors></Sectors>
                <ProductCatalog></ProductCatalog>
            </div>
        </Fragment>
    );
}

HomePage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
