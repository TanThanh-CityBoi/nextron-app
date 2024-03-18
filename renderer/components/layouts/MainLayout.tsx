import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { IPC_MESSAGE } from '@/common/ipc-message';
import NotifyModal from '../ui/modal/NotifyModal';
import { useTranslation } from 'react-i18next';

const MainLayout = ({ children }) => {
    const [showNotifyModal, setShowNotifyModal] = useState(false);
    const [notifyMessageKey, setNotifyMessageKey] = useState(null);
    const [notifyButtonKey, setNotifyButtonKey] = useState(null);
    const commonT = useTranslation('common');

    useEffect(() => {
        window.ipc.on(
            IPC_MESSAGE.NOTIFICATION_MODEL_SHOW,
            (arg: { message_key?: string; button_key?: string }) => {
                setNotifyMessageKey(arg?.message_key || null);
                setNotifyButtonKey(arg?.button_key || null);
                setShowNotifyModal(true);
            },
        );
    }, []);

    return (
        <>
            <div className="bg-primary-50 h-screen">
                <Header></Header>

                <main className="h-full">{children}</main>

                <Footer></Footer>

                <NotifyModal
                    showModal={showNotifyModal}
                    setShowModal={setShowNotifyModal}
                    className="h-[500px] w-[700px]"
                    buttonTitle={notifyButtonKey ? commonT.t(notifyButtonKey) : ''}
                    message={notifyMessageKey ? commonT.t(notifyMessageKey) : ''}
                ></NotifyModal>
            </div>
        </>
    );
};
export default MainLayout;
