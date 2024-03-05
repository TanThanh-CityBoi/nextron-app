import { MdOutlineSort, MdMenu } from "react-icons/md";
import AvatarGroup from "../ui/avatar/AvatarGroup";
import SecondaryButton from "../ui/button/SecondaryButton";

const Header = ({ collapsed, setCollapsed }: any) => {
   return (
      <div className="flex justify-between border-b border-gray-300 bg-white py-3 px-4">
         <SecondaryButton
            className="border-none !px-2"
            icon={collapsed ? <MdMenu size={25} /> : <MdOutlineSort size={25} />}
            onClick={() => setCollapsed(!collapsed)}
         />

         <AvatarGroup />
      </div>
   );
};
export default Header;
