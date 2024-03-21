import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { IPC_MESSAGE } from '@/common/ipc-message';
import ModalError from '../ui/modal/ModalError';
import { useTranslation } from 'react-i18next';
import ModalSuccess from '../ui/modal/ModalSuccess';

const MainLayout = ({ children }) => {
    const [showModalError, setShowModalError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const [buttonTitle, setButtonTitle] = useState(null);
    const commonT = useTranslation('common');

    useEffect(() => {
        window.ipc.on(
            IPC_MESSAGE.NOTIFICATION_MODEL_SHOW,
            (arg: {
                message_key?: string;
                message_sub?: Object;
                button_key?: string;
                modal_type: string;
            }) => {
                if (arg.modal_type == 'error') {
                    setErrorMessage(commonT.t(arg.message_key, { ...arg.message_sub }));
                    setShowModalError(true);
                }
                if (arg.modal_type == 'success') {
                    setSuccessMessage(commonT.t(arg.message_key, { ...arg.message_sub }));
                    setShowModalSuccess(true);
                }
                setButtonTitle(commonT.t(arg.button_key));
            },
        );
    }, []);

    return (
        <div className="bg-primary-50 grid min-h-[100vh] grid-flow-col grid-rows-10 gap-4">
            <div className="bg-primary-100 row-span-1">
                <Header></Header>
            </div>

            <main className="row-span-6">{children}</main>

            <div className="row-span-3">
                <Footer></Footer>
            </div>

            <ModalError
                showModal={showModalError}
                setShowModal={setShowModalError}
                className="h-[500px] w-[700px]"
                buttonTitle={buttonTitle || ''}
                message={errorMessage || ''}
            ></ModalError>

            <ModalSuccess
                showModal={showModalSuccess}
                setShowModal={setShowModalSuccess}
                className="h-[500px] w-[700px]"
                buttonTitle={buttonTitle || ''}
                message={successMessage || ''}
            ></ModalSuccess>
        </div>
    );
};
export default MainLayout;
