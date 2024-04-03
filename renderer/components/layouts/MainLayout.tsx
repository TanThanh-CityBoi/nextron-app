import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "./Header";
import Footer from "./Footer";
import ModalError from "../ui/modal/ModalError";
import ModalSuccess from "../ui/modal/ModalSuccess";
import { CreateModalPayload, IPC_MESSAGE, ModalType } from "@nextron-app/common";
import LogoutModal from "../ui/modal/LogoutModal";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
    const router = useRouter();

    const [showModalError, setShowModalError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    //
    const [successMessage, setSuccessMessage] = useState(null);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    //
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    //
    const [buttonTitle, setButtonTitle] = useState(null);
    const commonT = useTranslation("common");

    const handleLogout = () => {
        router.push("/login", "/login");
    };

    useEffect(() => {
        window.ipc.on(IPC_MESSAGE.MODAL_SHOW, (arg: CreateModalPayload) => {
            if (arg.type === ModalType.ERROR_NOTIFY) {
                setErrorMessage(commonT.t(arg.sub.messageKey, { ...arg.sub.messageArg }));
                setShowModalError(true);
                setButtonTitle(commonT.t(arg.sub.confirmButtonKey));
            }
            if (arg.type === ModalType.SUCCESS_NOTIFY) {
                setSuccessMessage(commonT.t(arg.sub.messageKey, { ...arg.sub.messageArg }));
                setShowModalSuccess(true);
                setButtonTitle(commonT.t(arg.sub.confirmButtonKey));
            }
            if (arg.type === ModalType.LOGOUT) {
                setShowLogoutModal(true);
            }
        });
    }, []);
    return (
        <div className="grid min-h-[100vh] grid-flow-col grid-rows-12">
            <div className="row-span-1 pb-1">
                <Header></Header>
            </div>

            <main className="row-span-7">{children}</main>

            <div className="row-span-4">
                <Footer></Footer>
            </div>

            <ModalError
                showModal={showModalError}
                setShowModal={setShowModalError}
                className="h-[500px] w-[700px]"
                buttonTitle={buttonTitle || ""}
                message={errorMessage || ""}
            ></ModalError>

            <ModalSuccess
                showModal={showModalSuccess}
                setShowModal={setShowModalSuccess}
                className="h-[500px] w-[700px]"
                buttonTitle={buttonTitle || ""}
                message={successMessage || ""}
            ></ModalSuccess>

            <LogoutModal
                setShowModal={setShowLogoutModal}
                handleOk={() => handleLogout()}
                showModal={showLogoutModal}
            ></LogoutModal>
        </div>
    );
};
export default MainLayout;
