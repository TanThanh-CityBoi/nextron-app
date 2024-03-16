import i18n from '@/translation/i18n';
import { I18nextProvider } from 'react-i18next';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <>
            <I18nextProvider i18n={i18n}>
                {getLayout(<Component {...pageProps}></Component>)}
            </I18nextProvider>
        </>
    );
}

export default MyApp;
