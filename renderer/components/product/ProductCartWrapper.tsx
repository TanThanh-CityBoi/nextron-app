import { useEffect, useState } from "react";

import { IPC_MESSAGE, PURCHASE_STATUS, ICart } from "@nextron-app/common";
import ConfirmPurchase from "../payment/ConfirmPurchase";
import ProductCartHeader from "./ProductCartHeader";
import ProductCatalog from "./ProductCatalog";
import Payment from "../payment/Payment";
import Cart from "../cart/Cart";


const ProductCartWrapper = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [purchaseStatus, setPurchaseStatus] = useState(PURCHASE_STATUS.ORDER);

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState<ICart>({
        totalAmount: 0,
        totalItems: 0,
        items: [],
    });

    const collapToggle = (status: boolean) => {
        if (status !== collapsed) {
            setCollapsed(status);
        }
    };

    const changePurchaseStatus = (status: string) => {
        window.ipc.send(IPC_MESSAGE.UPDATE_PURCHASE_STATUS, { status });
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
        window.ipc.on(IPC_MESSAGE.GET_CART_INFO_REPLY, (arg: any) => {
            setCart(arg);
        });
    }, [collapsed]);

    return (
        <div className="h-full flex flex-col pt-4">
            <ProductCartHeader
                collapToggle={collapToggle}
                collapsed={collapsed}
                purchaseStatus={purchaseStatus}
                setPurchaseStatus={changePurchaseStatus}
                cart={cart}
            ></ProductCartHeader>

            <div className="grid h-full grid-cols-5 bg-transparent px-4">
                <div className={`${collapsed ? "col-span-5" : "col-span-3"} h-full pt-4 pb-2 px-1`}>
                    <ProductCatalog collapsed={collapsed} products={products}></ProductCatalog>
                </div>

                <div
                    className={`${
                        collapsed ? "cart-hide" : "cart-show"
                    } min-h-[850px] h-full pb-7 translate-x-4`}
                >
                    {getStatusComponent(purchaseStatus)}
                </div>
            </div>
        </div>
    );
};

export default ProductCartWrapper;
