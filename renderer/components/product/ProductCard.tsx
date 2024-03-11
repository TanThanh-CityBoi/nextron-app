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
        <div className="absolute left-2 top-2 h-14 w-14 flex flex-col justify-center rounded-tl-lg bg-[#ff1f1f]">
            <div>
                <p className="text-center font-bold text-[#fbbf24]">KM</p>
            </div>
            <div>
                <p className="text-center font-bold text-[#fbbf24]">{props.discount}%</p>
            </div>
        </div>
    );
};

const ProductCard = (props: ProductProps) => {
    return (
        <div className="relative rounded-xl bg-gray-100  p-2 shadow-lg">
            <div className="relative aspect-square h-full w-full rounded-t-xl">
                <img
                    className="absolute h-full w-full rounded-t-xl object-cover"
                    src={props.thumbnail}
                    alt="product.img"
                ></img>
            </div>
            <div className="py-2">
                <p className="text-center font-semibold">{props.name}</p>
                <p className="text-center font-semibold">{props.sellPrice} đ</p>
                <p className="text-center line-through">{props.price} đ</p>
            </div>

            <div className="absolute right-3 top-3 rounded-lg bg-gray-300 p-3">
                <p className="font-bold text-gray-600">{props.amount}</p>
            </div>

            <DiscountTag discount={props.discount}></DiscountTag>
        </div>
    );
};

export default ProductCard;
