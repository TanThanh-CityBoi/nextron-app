import { useState } from "react";
import { Avatar, Dropdown, Space } from "antd";
import { useRouter } from "next/router";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";

import type { MenuProps } from "antd";
import ChangePasswordModal from "../model/ChangePassword";

const AvatarGroup = (props: any) => {
   const router = useRouter();

   const userInfo = {
      fullname: "Nguyen Tan Thanh",
      role: "IT",
      avatar: "https://i.pinimg.com/736x/ed/65/c3/ed65c3dee83ad5aa6c4724784e02b4f3.jpg",
   };

   const [isModalOpen, setIsModalOpen] = useState(false);

   const onClick: MenuProps["onClick"] = async ({ key }) => {
      const handleClick: any = {
         "1": () => router.push("/profile/profile"),
         "2": () => setIsModalOpen(true),
         "3": () => {
            router.push("/auth/login");
         },
      };
      handleClick?.[key]();
   };

   const hangdleOnClick = (e: any) => {
      e.preventDefault();
   };

   const items: MenuProps["items"] = [
      {
         label: "Tài khoản",
         key: "1",
         icon: <AiOutlineUser />,
      },
      {
         label: "Đổi mật khẩu",
         key: "2",
         icon: <RiLockPasswordLine />,
      },
      {
         label: "Đăng xuất",
         key: "3",
         icon: <AiOutlineLogout />,
      },
   ];

   return (
      <>
         {props.hiddenDropdown === true ? (
            <></>
         ) : (
            <div>
               <ChangePasswordModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

               <Dropdown menu={{ items, onClick }} placement="bottomRight">
                  <button onClick={hangdleOnClick}>
                     <Space>
                        <div className="me-1">
                           <p className="text-end text-sm font-medium">{userInfo?.fullname}</p>
                           <p className="text-end text-sm text-gray-500 font-medium uppercase">
                              {userInfo?.role || "USER"}
                           </p>
                        </div>
                        {userInfo?.avatar === "" ? (
                           <Avatar size={38}></Avatar>
                        ) : (
                           <Avatar src={userInfo?.avatar} size={38}></Avatar>
                        )}
                     </Space>
                  </button>
               </Dropdown>
            </div>
         )}
      </>
   );
};

export default AvatarGroup;
