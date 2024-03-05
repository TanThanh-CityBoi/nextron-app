import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineKey } from "react-icons/ai";
import { Modal } from "antd";
import { useState } from "react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";

const ChangePasswordModal = (props: {
   showButton?: any;
   isModalOpen: boolean;
   setIsModalOpen: Function;
}) => {
   const [isShowPass, setShowPass] = useState(false);
   const [isShowNewPass, setShowNewPass] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const handleCancel = () => {
      props.setIsModalOpen(false);
   };

   return (
      <>
         {props?.showButton}
         <Modal title={""} open={props.isModalOpen} footer={null}>
            <div className="relative py-3">
               <form className={`${isLoading ? "opacity-0" : ""}`}>
                  <div className="w-full mb-6">
                     <div className="relative w-full mb-6">
                        <label htmlFor="oldPassword" className="font-semibold mb-1">
                           Mật khẩu cũ{" "}
                        </label>
                        <input
                           aria-label="input"
                           className="text-gray-500 border border-gray-300 rounded-md w-full px-3 py-2"
                           id="oldPassword"
                           name="oldPassword"
                        ></input>

                        <button
                           className="absolute right-2 bottom-2"
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

                     <div className="relative w-full mb-6">
                        <label htmlFor="newPassword" className="font-semibold mb-1">
                           Mật khẩu mới{" "}
                        </label>
                        <input
                           aria-label="input"
                           className="text-gray-500 border border-gray-300 rounded-md w-full px-3 py-2"
                           id="newPassword"
                           name="newPassword"
                        ></input>
                        <button
                           className="absolute right-2 bottom-2"
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

                     <div className="w-full mb-6">
                        <label htmlFor="confirmPassword" className="font-semibold mb-1">
                           Nhập lại mật khẩu{" "}
                        </label>
                        <input
                           aria-label="input"
                           id="confirmPassword"
                           type={`${isShowNewPass ? "text" : "password"}`}
                           className="text-gray-500 border border-gray-300 rounded-md w-full px-3 py-2"
                           name="confirmPassword"
                        ></input>
                     </div>
                  </div>

                  <div className="flex justify-end gap-2">
                     <PrimaryButton
                        type="submit"
                        content="Cập nhật"
                        icon={<AiOutlineKey className="text-xl me-2" />}
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
