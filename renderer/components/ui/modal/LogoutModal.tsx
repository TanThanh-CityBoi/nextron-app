import PrimaryButton from "../button/PrimaryButton";
import BaseModal from "./BaseModal";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import SecondaryButton from "../button/SecondaryButton";
import InputCustom from "../input/InputCustom";

type LogoutModalProps = {
    showModal: boolean;
    setShowModal: Function;
    handleOk?: Function;
    handleCancel?: Function;
    buttonTitle?: string;
    message?: string;
};

const LogoutModal = ({ ...props }: React.AllHTMLAttributes<ReactElement> & LogoutModalProps) => {
    const commonT = useTranslation("common");

    const handleCancel = () => {
        if (props?.handleCancel) {
            props.handleCancel();
            return;
        }
        props.setShowModal(false);
    };
    const handleOk = () => {
        if (props?.handleOk) {
            props.handleOk();
            return;
        }
        props.setShowModal(false);
    };

    return (
        <>
            <BaseModal
                showModal={props.showModal}
                setShowModal={props.setShowModal}
                className="h-[450px] w-[550px] bg-white"
                handleOk={() => handleOk()}
                handleCancel={() => handleCancel()}
                disableHeader={true}
                disableToggle={true}
                footer={
                    <div className="flex justify-between gap-x-4 px-20 pb-16">
                        <PrimaryButton
                            type="button"
                            content={commonT.t("button.logout_title")}
                            className="w-1/2 py-3 text-lg !font-semibold"
                            background="bg-red-400"
                            onClick={() => handleOk()}
                        />

                        <SecondaryButton
                            type="button"
                            content={commonT.t("button.cancel_title")}
                            className="w-1/2 py-3 text-lg !font-semibold"
                            background="bg-white hover:bg-gray-200"
                            onClick={() => handleCancel()}
                        />
                    </div>
                }
            >
                <div className="flex h-full flex-col items-center justify-center gap-4 px-10 py-10">
                    <div className="flex justify-center">
                        <div className="aspect-square h-40 rounded-full bg-white p-4">
                            <img
                                alt="error.img"
                                src="/images/logout-icon.png"
                                className="h-full w-full"
                            ></img>
                        </div>
                    </div>
                    <div className="w-full px-10">
                        <h4 className="mb-4 text-center font-semibold">
                            {commonT.t("modal.logout_modal.title")}
                        </h4>
                        <InputCustom
                            type="text"
                            onChange={() => {}}
                            placeholder={commonT.t("modal.logout_modal.input_title")}
                            fontSize="text-lg"
                            className="px-3"
                        ></InputCustom>
                    </div>
                </div>
            </BaseModal>
        </>
    );
};
export default LogoutModal;
