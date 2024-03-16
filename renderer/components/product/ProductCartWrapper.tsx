import { useEffect, useState } from 'react';

import Cart from '../cart/Cart';
import { IPC_MESSAGE } from '@/common/ipc-message';
import { CartType } from '@/common/type';
import ProductCatalog from './ProductCatalog';
import ProductCartHeader from './ProductCartHeader';
import Payment from '../payment/Payment';
import { PURCHASE_STATUS } from '@/common/constants';
import ConfirmPurchase from '../payment/ConfirmPurchase';

const ProductCartWrapper = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [purchaseStatus, setPurchaseStatus] = useState(PURCHASE_STATUS.ORDER);

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState<CartType>({
        item_numbers: 0,
        items: [],
        total: 0,
    });

    const statusMapping = {
        ORDER: <Cart setPurchaseStatus={setPurchaseStatus}></Cart>,
        CONFIRM_PURCHASE: (
            <ConfirmPurchase cart={cart} setPurchaseStatus={setPurchaseStatus}></ConfirmPurchase>
        ),
        PAYMENT: <Payment></Payment>,
    };
    const getStatusComponent = (key: string) => {
        return statusMapping?.[key] || <Cart setPurchaseStatus={setPurchaseStatus}></Cart>;
    };

    useEffect(() => {
        window.ipc.send(IPC_MESSAGE.GET_LIST_PRODUCTS, {});
        window.ipc.on(IPC_MESSAGE.GET_LIST_PRODUCTS_REPLY, (arg: any) => {
            setProducts(arg);
        });
        window.ipc.on(IPC_MESSAGE.GET_CART_ITEMS_REPLY, (arg: any) => {
            setCart(arg);
        });
    }, []);

    return (
        <div className="">
            <ProductCartHeader
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                purchaseStatus={purchaseStatus}
                setPurchaseStatus={setPurchaseStatus}
                cart={cart}
            ></ProductCartHeader>

            <div className="grid h-[50vh] grid-cols-12">
                <div
                    className={`${collapsed ? 'col-span-12' : 'col-span-8'} no-scrollbar mt-4 overflow-x-scroll`}
                >
                    <ProductCatalog products={products}></ProductCatalog>
                </div>

                <div className={`${collapsed ? 'hidden' : 'col-span-4'}`}>
                    {getStatusComponent(purchaseStatus)}
                </div>
            </div>
        </div>
    );
};

export default ProductCartWrapper;
