import { useEffect, useState } from "react";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "antd";
import { useRouter } from "next/router";

import { MenuData, MenuItemType, ChildMenuItemType } from "./MenuData";

const Sidebar = ({ collapsed }: any) => {
   const router = useRouter();

   const [currentKey, seCurrentKey] = useState([""]);

   const getItems = (items: Array<MenuItemType>) => {
      const result: any[] = [];
      items.forEach((val: MenuItemType) => {
         const children: any[] = [];
         val.children.forEach((child) => {
            children.push({
               ...child,
               key: child.id,
               label: <Link href={child.link}>{child.label}</Link>,
            });
         });
         result.push({
            key: val.id,
            icon: val.icon,
            label: val.label,
            children,
         });
      });
      return result;
   };

   const getChildItems = (items: Array<MenuItemType>): Array<ChildMenuItemType> => {
      const children: Array<ChildMenuItemType> = [];
      items.forEach((item: any) => {
         children.push(...item.children);
      });
      return children;
   };

   useEffect(() => {
      const childrenItems: Array<ChildMenuItemType> = getChildItems(MenuData);

      const activeKeys = childrenItems.filter((val: any) => router.pathname.includes(val.link));
      if (activeKeys.length) seCurrentKey([activeKeys[0].id]);
      else seCurrentKey([""]);
   }, [router.pathname]);

   const items = getItems(MenuData);
   return (
      <>
         <Sider
            className="border-r border-gray-300"
            style={{ background: "#FFF" }}
            trigger={null}
            collapsible
            width={280}
            collapsed={collapsed}
         >
            <div className="flex items-center justify-center py-6 px-6">
               <Image
                  className="ml-auto mr-auto"
                  src="/images/logo.png"
                  alt="Logo image"
                  width="50px"
                  height="50px"
               />
            </div>

            <Menu
               theme="light"
               mode="inline"
               style={{ fontWeight: 600, border: "none" }}
               selectedKeys={currentKey}
               items={items}
            />
         </Sider>
      </>
   );
};
export default Sidebar;
