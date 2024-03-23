import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from './Header';
import Footer from './Footer';
import ModalError from '../ui/modal/ModalError';
import ModalSuccess from '../ui/modal/ModalSuccess';
import { CreateModalPayload, IPC_MESSAGE, ModalType } from '@nextron-app/common';

const MainLayout = ({ children }) => {
    const [showModalError, setShowModalError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const [buttonTitle, setButtonTitle] = useState(null);
    const commonT = useTranslation('common');

    useEffect(() => {
        window.ipc.on(IPC_MESSAGE.MODAL_SHOW, (arg: CreateModalPayload) => {
            if (arg.type == ModalType.ERROR_NOTIFY) {
                setErrorMessage(commonT.t(arg.sub.messageKey, { ...arg.sub.messageArg }));
                setShowModalError(true);
            }
            if (arg.type == 'SUCCESS_NOTIFY') {
                setSuccessMessage(commonT.t(arg.sub.messageKey, { ...arg.sub.messageArg }));
                setShowModalSuccess(true);
            }
            setButtonTitle(commonT.t(arg.sub.confirmButtonKey));
        });
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
