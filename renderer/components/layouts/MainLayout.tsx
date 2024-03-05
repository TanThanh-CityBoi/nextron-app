import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Layout } from "antd";

const MainLayout = ({ children }) => {
   const [collapsed, setCollapsed] = useState(false);

   return (
      <>
         <Layout className="min-h-screen">
            <Sidebar collapsed={collapsed}></Sidebar>
            <Layout>
               <Header
                  collapsed={collapsed}
                  setCollapsed={(val: boolean) => setCollapsed(val)}
               ></Header>
               <div className="h-full">
                  <main>{children}</main>
               </div>
            </Layout>
         </Layout>
      </>
   );
};
export default MainLayout;
