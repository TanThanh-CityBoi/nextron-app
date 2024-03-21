import { useEffect, useRef, useState } from 'react';
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
    const [preItems, setPreItems] = useState([]);

    const handlePayment = () => {
        if (cart.item_numbers < 1) {
            window.ipc.send(IPC_MESSAGE.CREATE_MODAL, {
                ipc_message: IPC_MESSAGE.NOTIFICATION_MODEL_SHOW,
                sub: {
                    message_key: 'message.empty_cart',
                    button_key: 'button.close_title',
                    modal_type: 'error',
                },
            });
            return;
        }
        props.setPurchaseStatus(PURCHASE_STATUS.CONFIRM_PURCHASE);
    };

    const cartItemRef = useRef(null);

    const scrollToBottom = () => {
        cartItemRef.current?.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        if (cartItems.length > preItems.length && cartItems.length > 5) {
            scrollToBottom();
        }
        setPreItems(cartItems);
    }, [cartItems]);

    useEffect(() => {
        window.ipc.send(IPC_MESSAGE.GET_CART_ITEMS, {});
        window.ipc.on(IPC_MESSAGE.GET_CART_ITEMS_REPLY, (arg: CartType) => {
            setCart(arg);
            setCartItems(arg?.items || []);
        });
    }, []);

    return (
        <div className="border-primary-600 flex h-full flex-col justify-between rounded-bl-xl border-b-4 border-s-4 bg-white shadow-xl">
            <div className="h-max max-h-[580px] px-2 py-3">
                <div className="no-scrollbar h-full overflow-x-scroll">
                    {cartItems?.map((item, idx) => {
                        return (
                            <div className="px-2" key={idx}>
                                <CartItem
                                    id={item.id}
                                    thumbnail={item.thumbnail}
                                    name_en={item.name_en}
                                    name_vi={item.name_vi}
                                    amount={item.amount}
                                    price={item.price}
                                ></CartItem>
                            </div>
                        );
                    })}
                    <div ref={cartItemRef} />
                </div>
            </div>

            <div className="bg-primary-100 flex h-[250px] flex-col justify-between rounded-bl-xl px-4 pb-5 pt-5">
                <div className="mb-3 flex justify-between">
                    <h5 className="font-semibold">{homeT.t('cart.cart_total')}:</h5>
                    <h5 className="font-semibold">{cart.total} đ</h5>
                </div>
                <div className="flex justify-end">
                    <PrimaryButton
                        onClick={() => handlePayment()}
                        content={commonT.t('cart.btn_payment')}
                        className="w-full px-8 py-3 font-semibold"
                    ></PrimaryButton>
                </div>
            </div>
        </div>
    );
};
export default Cart;
