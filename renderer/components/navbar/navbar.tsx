import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavItem = ({ text, href, idx, activeIdx, setActiveIdx }) => {
   return (
      <div
         className={`${activeIdx === idx ? "bg-[#5476e6]" : "hover:opacity-70"}`}
         onClick={() => {
            setActiveIdx(idx);
         }}
      >
         <Link className="" href={href}>
            <a className="inline-block w-full">{text}</a>
         </Link>
      </div>
   );
};

const MENU_LIST = [
   { text: "Home", href: "/home" },
   { text: "About Us", href: "/members/members" },
   { text: "Contact", href: "/profile/profile" },
];

const Navbar = () => {
   const [activeIdx, setActiveIdx] = useState(0);

   return (
      <div className="flex flex-col justify-between h-full">
         <div>
            <div className="text-center p-5">
               <Image
                  className="ml-auto mr-auto"
                  src="/images/logo.png"
                  alt="Logo image"
                  width="50px"
                  height="50px"
               />
            </div>
            <div className="px-4 my-5 w-full">
               {MENU_LIST.map((menu, idx) => (
                  <NavItem
                     idx={idx}
                     activeIdx={activeIdx}
                     setActiveIdx={setActiveIdx}
                     key={idx}
                     {...menu}
                  />
               ))}
            </div>
         </div>

         <div className="px-4 mb-5">
            <Link href="/auth/login">
               <a className="inline-block w-full">Logout</a>
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
