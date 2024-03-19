import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { IPC_MESSAGE } from '@/common/ipc-message';
import ModalError from '../ui/modal/ModalError';
import { useTranslation } from 'react-i18next';
import ModalSuccess from '../ui/modal/ModalSuccess';

const MainLayout = ({ children }) => {
    const [showModalError, setShowModalError] = useState(false);
    const [errorMessageKey, setErrorMessageKey] = useState(null);
    const [successMessageKey, setSuccessMessageKey] = useState(null);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const [buttonTitleKey, setButtonTitleKey] = useState(null);
    const commonT = useTranslation('common');

    useEffect(() => {
        window.ipc.on(
            IPC_MESSAGE.NOTIFICATION_MODEL_SHOW,
            (arg: { message_key?: string; button_key?: string; modal_type: string }) => {
                if (arg.modal_type == 'error') {
                    setErrorMessageKey(arg?.message_key || null);
                    setShowModalError(true);
                }
                if (arg.modal_type == 'success') {
                    setSuccessMessageKey(arg?.message_key || null);
                    setShowModalSuccess(true);
                }
                setButtonTitleKey(arg?.button_key || null);
            },
        );
    }, []);

    return (
        <>
            <div className="bg-primary-50 h-screen">
                <Header></Header>

                <main className="h-full">{children}</main>

                <Footer></Footer>

                <ModalError
                    showModal={showModalError}
                    setShowModal={setShowModalError}
                    className="h-[500px] w-[700px]"
                    buttonTitle={buttonTitleKey ? commonT.t(buttonTitleKey) : ''}
                    message={errorMessageKey ? commonT.t(errorMessageKey) : ''}
                ></ModalError>

                <ModalSuccess
                    showModal={showModalSuccess}
                    setShowModal={setShowModalSuccess}
                    className="h-[500px] w-[700px]"
                    buttonTitle={buttonTitleKey ? commonT.t(buttonTitleKey) : ''}
                    message={successMessageKey ? commonT.t(successMessageKey) : ''}
                ></ModalSuccess>
            </div>
        </>
    );
};
export default MainLayout;
