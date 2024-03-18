import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

function SleepPage() {
    const router = useRouter();
    return (
        <Fragment>
            <Head>
                <title>Sleep Page- Nextron</title>
            </Head>
            <div
                className="bg-primary-200 h-screen w-full"
                onClick={() => {
                    router.push('/home', '/home');
                }}
            >
                Sleep Page
            </div>
        </Fragment>
    );
}

SleepPage.getLayout = (page) => {
    return <div>{page}</div>;
};

export default SleepPage;
