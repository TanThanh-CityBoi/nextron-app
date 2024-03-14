import { useEffect, useState } from 'react';
import PrimaryButton from '../ui/button/PrimaryButton';
import CartItem from './CartItem';
import { IPC_MESSAGE } from '@/common/ipc.message';

const Cart = () => {
    // const selectedItems = [
    //     {
    //         name: 'Coca-cola',
    //         price: 10000,
    //         thumbnail:
    //             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
    //         amount: 10,
    //     },
    //     {
    //         name: 'Coca-cola',
    //         price: 10000,
    //         thumbnail:
    //             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
    //         amount: 10,
    //     },
    //     {
    //         name: 'Coca-cola',
    //         price: 10000,
    //         thumbnail:
    //             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
    //         amount: 10,
    //     },
    // ];

    const [cartItems, setCartItems] = useState([]);

    // const handleAddToCart = (items) => {
    //     window.ipc.send(IPC_MESSAGE.ADD_TO_CART, items);
    // };

    useEffect(() => {
        window.ipc.send(IPC_MESSAGE.GET_CART_ITEMS, {});
        window.ipc.on(IPC_MESSAGE.GET_CART_ITEMS_REPLY, (arg: any) => {
            setCartItems(arg);
        });
        window.ipc.on(IPC_MESSAGE.ADD_TO_CART_REPLY, (arg: any) => {
            setCartItems(arg);
        });
    }, []);

    return (
        <div className="border-primary-600 flex h-full max-h-[700px] flex-col justify-between rounded-bl-xl border-b-4 border-s-4 bg-white px-3 shadow-2xl">
            <div className="py-2">
                {cartItems.map((item, idx) => {
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
