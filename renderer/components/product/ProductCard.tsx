type ProductProps = {
   name: string;
   price: number;
   sellPrice: number;
   thumbnail: string;
   discount?: number;
   amount: number;
};

const DiscountTag = (props: { discount: number }) => {
   return (
      <div className="flex flex-col justify-center absolute top-2 left-2 bg-[#ff1f1f] rounded-tl-lg h-14 w-14">
         <div>
            <p className="font-bold text-center text-[#fbbf24]">KM</p>
         </div>
         <div>
            <p className="font-bold text-center text-[#fbbf24]">{props.discount}%</p>
         </div>
      </div>
   );
};

const ProductCard = (props: ProductProps) => {
   return (
      <div className="bg-gray-100 rounded-xl relative p-2 shadow-lg">
         <div className="relative aspect-square h-full w-full rounded-t-xl">
            <img
               className="absolute object-cover h-full w-full rounded-t-xl"
               src={props.thumbnail}
               alt="product.img"
            ></img>
         </div>
         <div className="py-2">
            <p className="text-center font-semibold">{props.name}</p>
            <p className="text-center font-semibold">{props.sellPrice} đ</p>
            <p className="text-center line-through">{props.price} đ</p>
         </div>

         <div className="absolute top-3 right-3 bg-gray-300 rounded-lg p-3">
            <p className="font-bold text-gray-600 ">{props.amount}</p>
         </div>

         <DiscountTag discount={props.discount}></DiscountTag>
      </div>
   );
};

export default ProductCard;
