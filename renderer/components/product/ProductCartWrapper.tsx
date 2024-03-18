import { useEffect, useState } from 'react';

import { IPC_MESSAGE } from '@/common/ipc-message';
import { PURCHASE_STATUS } from '@/common/constants';
import { CartType } from '@/common/type';
import ConfirmPurchase from '../payment/ConfirmPurchase';
import ProductCartHeader from './ProductCartHeader';
import ProductCatalog from './ProductCatalog';
import Payment from '../payment/Payment';
import Cart from '../cart/Cart';

const ProductCartWrapper = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [purchaseStatus, setPurchaseStatus] = useState(PURCHASE_STATUS.ORDER);

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState<CartType>({
        item_numbers: 0,
        items: [],
        total: 0,
    });

    const changePurchaseStatus = (status: string) => {
        window.ipc.send(IPC_MESSAGE.UPDATE_PURCHAGE_STATUS, { status });
        setPurchaseStatus(status);
    };

    const statusMapping = {
        ORDER: <Cart setPurchaseStatus={changePurchaseStatus}></Cart>,
        CONFIRM_PURCHASE: (
            <ConfirmPurchase cart={cart} setPurchaseStatus={changePurchaseStatus}></ConfirmPurchase>
        ),
        PAYMENT: <Payment></Payment>,
    };
    const getStatusComponent = (key: string) => {
        return statusMapping?.[key] || <Cart setPurchaseStatus={changePurchaseStatus}></Cart>;
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
                setPurchaseStatus={changePurchaseStatus}
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
