const ProductCard = ({ name, price, thumbnail }) => {
   return (
      <div className="bg-gray-100 rounded-xl p-2 shadow-lg">
         <div className="relative aspect-square h-full w-full rounded-t-xl">
            <img
               className="absolute object-cover h-full w-full rounded-t-xl"
               src={thumbnail}
               alt="product.img"
            ></img>
         </div>
         <div className="py-2">
            <p className="text-center">{name}</p>
            <p className="text-center">{price}</p>
         </div>
      </div>
   );
};

export default ProductCard;
