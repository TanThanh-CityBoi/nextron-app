import { useEffect, useState } from 'react';
import PrimaryButton from '../ui/button/PrimaryButton';
import CartItem from './CartItem';
import { IPC_MESSAGE } from '@/common/ipc-message';
import { CartType } from '@/common/type';
import { PURCHASE_STATUS } from '@/common/constants';
import { useTranslation } from 'react-i18next';

const Cart = (props: { setPurchaseStatus: Function }) => {
    const [cart, setCart] = useState<CartType>({
        total: 0,
        item_numbers: 0,
        items: [],
    });

    const homeT = useTranslation('home');
    const commonT = useTranslation('common');

    const [cartItems, setCartItems] = useState([]);

    const handlePayment = () => {
        if (cart.item_numbers < 1) {
            window.ipc.send(IPC_MESSAGE.CREATE_MODAL, {
                ipc_message: IPC_MESSAGE.NOTIFICATION_MODEL_SHOW,
                sub: {
                    message_key: 'message.empty_cart',
                    button_key: 'button.close_title',
                },
            });
            return;
        }
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
                    <h5 className="font-semibold">{homeT.t('cart.cart_total')}:</h5>
                    <h5 className="font-semibold">{cart.total} đ</h5>
                </div>
                <div className="flex justify-end">
                    <PrimaryButton
                        onClick={() => handlePayment()}
                        content={commonT.t('cart.btn_payment')}
                        className="min-w-40 px-8 py-3 font-semibold"
                    ></PrimaryButton>
                </div>
            </div>
        </div>
    );
};
export default Cart;
