import PrimaryButton from '../ui/button/PrimaryButton';
import CartItem from './CartItem';

const Cart = () => {
    const selectedItems = [
        {
            name: 'Coca-cola',
            price: 10000,
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
            amount: 10,
        },
        {
            name: 'Coca-cola',
            price: 10000,
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
            amount: 10,
        },
        {
            name: 'Coca-cola',
            price: 10000,
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
            amount: 10,
        },
    ];

    return (
        <div className="border-primary-600 flex h-full max-h-[700px] flex-col justify-between rounded-bl-xl border-b-4 border-s-4 bg-white px-3 shadow-2xl">
            <div className="py-2">
                {selectedItems.map((item, idx) => {
                    return (
                        <CartItem
                            key={idx}
                            thumbnail={item.thumbnail}
                            name={item.name}
                            amount={item.amount}
                            price={item.price}
                        ></CartItem>
                    );
                })}
            </div>
            <div className="p-4">
                <div className="mb-3 flex justify-between">
                    <h5 className="font-semibold">Tổng cộng</h5>
                    <h5 className="font-semibold">30.000 đ</h5>
                </div>
                <div className="flex justify-end">
                    <PrimaryButton content="Thanh toán"></PrimaryButton>
                </div>
            </div>
        </div>
    );
};
export default Cart;
