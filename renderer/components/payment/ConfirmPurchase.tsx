import { PURCHASE_STATUS } from '@/common/constants';
import { CartType } from '@/common/type';
import { useTranslation } from 'react-i18next';

const ConfirmPurchase = (props: { cart: CartType; setPurchaseStatus: Function }) => {
    const homeT = useTranslation('home');
    //
    return (
        <div className="border-primary-600 flex h-full max-h-[700px] flex-col justify-between rounded-bl-xl border-b-4 border-s-4 bg-white px-3 shadow-2xl">
            <div className="p-4">
                <div className="mb-3 flex justify-between">
                    <h5 className="font-semibold">{homeT.t('cart.cart_total')}</h5>
                    <h5 className="font-semibold">{props.cart.total} đ</h5>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h5>{homeT.t('cart.payment_method')}</h5>
                    <button
                        className="bg-primary-200 w-full rounded-md p-4"
                        onClick={() => props.setPurchaseStatus(PURCHASE_STATUS.PAYMENT)}
                    >
                        MoMo
                    </button>
                    <button
                        className="bg-primary-200 w-full rounded-md p-4"
                        onClick={() => props.setPurchaseStatus(PURCHASE_STATUS.PAYMENT)}
                    >
                        VN Pay
                    </button>
                    <button
                        className="bg-primary-200 w-full rounded-md p-4"
                        onClick={() => props.setPurchaseStatus(PURCHASE_STATUS.PAYMENT)}
                    >
                        VietQr
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ConfirmPurchase;
