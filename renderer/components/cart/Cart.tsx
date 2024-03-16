import { useEffect, useState } from 'react';
import PrimaryButton from '../ui/button/PrimaryButton';
import CartItem from './CartItem';
import { IPC_MESSAGE } from '@/common/ipc-message';
import { CartType } from '@/common/type';
import { PURCHASE_STATUS } from '@/common/constants';

const Cart = (props: { setPurchaseStatus: Function }) => {
    const [cart, setCart] = useState<CartType>({
        total: 0,
        item_numbers: 0,
        items: [],
    });

    const [cartItems, setCartItems] = useState([]);

    const handlePayment = () => {
        props.setPurchaseStatus(PURCHASE_STATUS.CONFIRM_PURCHASE);
    };

    useEffect(() => {
        window.ipc.send(IPC_MESSAGE.GET_CART_ITEMS, {});
        window.ipc.on(IPC_MESSAGE.GET_CART_ITEMS_REPLY, (arg: CartType) => {
            setCart(arg);
            setCartItems(arg?.items || []);
        });
    }, []);

    return (
        <div className="border-primary-600 flex h-full max-h-[700px] flex-col justify-between rounded-bl-xl border-b-4 border-s-4 bg-white px-3 shadow-2xl">
            <div className="py-2">
                {cartItems?.map((item, idx) => {
                    return (
                        <CartItem
                            key={idx}
                            id={item.id}
                            thumbnail={item.thumbnail}
                            name_en={item.name_en}
                            name_vi={item.name_vi}
                            amount={item.amount}
                            price={item.price}
                        ></CartItem>
                    );
                })}
            </div>
            <div className="p-4">
                <div className="mb-3 flex justify-between">
                    <h5 className="font-semibold">Tổng cộng</h5>
                    <h5 className="font-semibold">{cart.total} đ</h5>
                </div>
                <div className="flex justify-end">
                    <PrimaryButton
                        onClick={() => handlePayment()}
                        content="Thanh toán"
                    ></PrimaryButton>
                </div>
            </div>
        </div>
    );
};
export default Cart;
