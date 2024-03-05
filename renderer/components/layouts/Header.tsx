import { MdOutlineSort, MdMenu } from "react-icons/md";
import { Button } from "antd";
import AvatarGroup from "../ui/avatar/AvatarGroup";

const Header = ({ collapsed, setCollapsed }: any) => {
   return (
      <div className="flex justify-between border-b border-gray-300 bg-white py-6 px-4">
         <Button
            type="text"
            icon={collapsed ? <MdMenu size={25} /> : <MdOutlineSort size={25} />}
            onClick={() => setCollapsed(!collapsed)}
         />

         <AvatarGroup />
      </div>
   );
};
export default Header;
