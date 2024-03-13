import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineKey } from 'react-icons/ai';
import { Modal } from 'antd';
import { useState } from 'react';
import PrimaryButton from '../button/PrimaryButton';
import SecondaryButton from '../button/SecondaryButton';

const ChangePasswordModal = (props: {
    showButton?: any;
    isModalOpen: boolean;
    setIsModalOpen: Function;
}) => {
    const [isShowPass, setShowPass] = useState(false);
    const [isShowNewPass, setShowNewPass] = useState(false);

    const handleCancel = () => {
        props.setIsModalOpen(false);
    };

    return (
        <>
            {props?.showButton}
            <Modal title={''} open={props.isModalOpen} footer={null}>
                <div className="relative py-3">
                    <form className={``}>
                        <div className="mb-6 w-full">
                            <div className="relative mb-6 w-full">
                                <label htmlFor="oldPassword" className="mb-1 font-semibold">
                                    Mật khẩu cũ{' '}
                                </label>
                                <input
                                    aria-label="input"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-500"
                                    id="oldPassword"
                                    name="oldPassword"
                                ></input>

                                <button
                                    className="absolute bottom-2 right-2"
                                    type="button"
                                    onClick={() => setShowPass(!isShowPass)}
                                >
                                    {isShowPass ? (
                                        <AiOutlineEyeInvisible size={20} />
                                    ) : (
                                        <AiOutlineEye size={20} />
                                    )}
                                </button>
                            </div>

                            <div className="relative mb-6 w-full">
                                <label htmlFor="newPassword" className="mb-1 font-semibold">
                                    Mật khẩu mới{' '}
                                </label>
                                <input
                                    aria-label="input"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-500"
                                    id="newPassword"
                                    name="newPassword"
                                ></input>
                                <button
                                    className="absolute bottom-2 right-2"
                                    type="button"
                                    onClick={() => setShowNewPass(!isShowNewPass)}
                                >
                                    {isShowNewPass ? (
                                        <AiOutlineEyeInvisible size={20} />
                                    ) : (
                                        <AiOutlineEye size={20} />
                                    )}
                                </button>
                            </div>

                            <div className="mb-6 w-full">
                                <label htmlFor="confirmPassword" className="mb-1 font-semibold">
                                    Nhập lại mật khẩu{' '}
                                </label>
                                <input
                                    aria-label="input"
                                    id="confirmPassword"
                                    type={`${isShowNewPass ? 'text' : 'password'}`}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-500"
                                    name="confirmPassword"
                                ></input>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <PrimaryButton
                                type="submit"
                                content="Cập nhật"
                                icon={<AiOutlineKey className="me-2 text-xl" />}
                            />
                            <SecondaryButton content="Hủy" type="button" onClick={handleCancel} />
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};
export default ChangePasswordModal;
