import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductCatalog = () => {
   const products = [
      {
         name: "Coca-cola",
         price: 10000,
         sellPrice: 9000,
         thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU",
         amount: 10,
         discount: 30,
      },
      {
         name: "Coca-cola",
         sellPrice: 9000,
         price: 10000,
         thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU",
         amount: 10,
         discount: 30,
      },
      {
         name: "Coca-cola",
         sellPrice: 9000,
         price: 10000,
         thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU",
         amount: 10,
         discount: 30,
      },
      {
         name: "Coca-cola",
         sellPrice: 9000,
         price: 10000,
         thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU",
         amount: 10,
         discount: 30,
      },
      {
         name: "Coca-cola",
         sellPrice: 9000,
         price: 10000,
         thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU",
         amount: 10,
         discount: 30,
      },
   ];

   const [collapsed, setCollapsed] = useState(false);

   return (
      <div className="flex">
         <div className="w-full">
            <div className="flex justify-between py-4">
               <div className="bg-primary-300 rounded-e-full py-2 px-4">
                  <h5> Danh sách sản phẩm</h5>
               </div>
               <div>
                  <button onClick={() => setCollapsed(!collapsed)}>Collaped</button>
               </div>
            </div>
            <div className="grid gap-x-4 gap-y-6 grid-cols-[repeat(auto-fill,minmax(min(10rem,100%),1fr))] p-4 overflow-x-scroll small-scrollbar h-[50vh]">
               {products.map((item, id) => {
                  return (
                     <div key={id}>
                        <ProductCard
                           thumbnail={item.thumbnail}
                           price={item.price}
                           name={item.name}
                           sellPrice={item.sellPrice}
                           amount={item.amount}
                           discount={item.discount}
                        ></ProductCard>
                     </div>
                  );
               })}
            </div>
         </div>

         <div className={`bg-gray-400 ${collapsed ? "w-0" : "w-1/3"}`}></div>
      </div>
   );
};

export default ProductCatalog;
