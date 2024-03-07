import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { Switch } from "antd";
import { useState } from "react";

const Header = () => {
   const [lang, setLang] = useState("vi");
   return (
      <div className="flex justify-between items-center h-28 p-6 ">
         <div className="relative aspect-video px-2 h-16">
            <img
               className="absolute h-full w-full"
               src="/images/logo-2.png"
               alt="core-vision.img"
            ></img>
         </div>

         <div className="flex gap-x-3">
            <div className="flex items-center rounded-xl min-w-64 gap-x-2 px-4 py-2 bg-primary-100">
               <IoIosSearch size={20} />
               <div>
                  <input
                     className="bg-primary-100 focus-visible:!outline-none"
                     type="text"
                     placeholder="Tìm kiếm"
                  ></input>
               </div>
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl p-0.5">
               <button
                  className={`flex items-center py-1.5 px-3 ${
                     lang == "vi" ? "bg-gray-200 rounded-xl" : ""
                  }`}
                  onClick={() => setLang("vi")}
               >
                  <Image src="/icons/vi.png" width={20} height={20}></Image>
               </button>
               <button
                  className={`flex items-center py-1.5 px-3 ${
                     lang == "en" ? "bg-gray-200 rounded-xl" : ""
                  }`}
                  onClick={() => setLang("en")}
               >
                  <Image src="/icons/en.png" width={20} height={20}></Image>
               </button>
            </div>
         </div>
      </div>
   );
};
export default Header;
