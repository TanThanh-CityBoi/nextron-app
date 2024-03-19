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
                className="h-screen w-full"
                onClick={() => {
                    router.push('/home', '/home');
                }}
            >
                <video
                    src="https://embed-ssl.wistia.com/deliveries/262fd8e350169efeecfd5bfce33b7997f5a8fec0.bin"
                    className="h-full w-full object-cover"
                ></video>
            </div>
        </Fragment>
    );
}

SleepPage.getLayout = (page) => {
    return <div>{page}</div>;
};

export default SleepPage;
