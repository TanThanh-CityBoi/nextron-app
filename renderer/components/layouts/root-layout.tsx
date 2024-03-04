import Navbar from "../navbar/navbar";

const RootLayout = ({ children }) => {
   return (
      <>
         <div className="grid grid-cols-12 h-screen">
            <div className="col-span-3 bg-gray-300">
               <Navbar></Navbar>
            </div>
            <div className="col-span-9">
               <div className="bg-gray-500 p-3"> Header </div>

               <main>{children}</main>
            </div>
         </div>
      </>
   );
};
export default RootLayout;
