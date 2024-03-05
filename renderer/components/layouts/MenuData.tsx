import { ReactElement } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { IoNewspaperOutline, IoHomeOutline } from "react-icons/io5";

export type MenuItemType = {
   id: string;
   icon: ReactElement;
   label: string;
   link: string;
   children: Array<ChildMenuItemType>;
};

export type ChildMenuItemType = {
   id: string;
   icon: ReactElement;
   label: string;
   link: string;
};

const MenuData: Array<MenuItemType> = [
   {
      id: "home",
      icon: <IoHomeOutline size={26} />,
      label: "Trang chủ",
      link: "/home",
      children: [
         {
            id: "dashboard",
            label: "Trang chủ",
            icon: <RxDotFilled />,
            link: "/home",
         },
      ],
   },
   {
      id: "users",
      icon: <AiOutlineUser size={27} />,
      label: "Thành viên",
      link: "/profile/profile",
      children: [
         {
            id: "users-management",
            label: "Thành viên",
            icon: <RxDotFilled />,
            link: "/home",
         },
         {
            id: "admins-management",
            label: "Quản trị viên",
            icon: <RxDotFilled />,
            link: "/profile/profile",
         },
      ],
   },
   {
      id: "posts",
      icon: <IoNewspaperOutline size={27} />,
      label: "Bài viết",
      link: "/home",
      children: [
         {
            id: "pots-management",
            label: "Bài viết",
            icon: <RxDotFilled />,
            link: "/home",
         },
      ],
   },
];
export { MenuData };
