import { AiOutlineIssuesClose } from "react-icons/ai";
import PrimaryButton from "../button/PrimaryButton";
import BaseModal from "./BaseModal";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type ModalSuccessProps = {
    showModal: boolean;
    setShowModal: Function;
    handleOk?: Function;
    handleCancel?: Function;
    buttonTitle?: string;
    message?: string;
};

const ModalSuccess = ({ ...props }: React.AllHTMLAttributes<ReactElement> & ModalSuccessProps) => {
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
                className="h-[450px] w-[550px] bg-green-600"
                handleOk={() => handleOk()}
                handleCancel={() => handleCancel()}
                disableHeader={true}
                disableToggle={false}
                footer={
                    <div className="flex justify-center pb-10">
                        <PrimaryButton
                            type="button"
                            content={
                                props?.buttonTitle || commonT.t("modal.base_modal.confirm_button")
                            }
                            icon={<AiOutlineIssuesClose className="me-2 text-2xl" />}
                            className="min-w-[200px] px-8 py-4 text-xl !font-semibold"
                            background="bg-yellow-500"
                            onClick={() => handleOk()}
                        />
                    </div>
                }
            >
                <div className="flex h-full flex-col items-center justify-center py-5">
                    <div className="flex justify-center py-5">
                        <div className="aspect-square h-40 rounded-full bg-white py-5 pe-3 ps-6">
                            <img
                                alt="success-icon.img"
                                src="/images/success-icon.png"
                                className="h-full w-full"
                            ></img>
                        </div>
                    </div>

                    <h3 className="text-center font-semibold text-gray-100">{props?.message}</h3>
                </div>
            </BaseModal>
        </>
    );
};
export default ModalSuccess;
