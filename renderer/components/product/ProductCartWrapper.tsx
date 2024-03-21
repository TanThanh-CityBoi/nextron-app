import { useEffect, useState } from 'react';

import { IPC_MESSAGE } from '@/common/ipc-message';
import { PURCHASE_STATUS } from '@/common/constants';
import { CartType } from '@/common/type';
import ConfirmPurchase from '../payment/ConfirmPurchase';
import ProductCartHeader from './ProductCartHeader';
import ProductCatalog from './ProductCatalog';
import Payment from '../payment/Payment';
import Cart from '../cart/Cart';
import PrimaryButton from '../ui/button/PrimaryButton';

const ProductCartWrapper = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [purchaseStatus, setPurchaseStatus] = useState(PURCHASE_STATUS.ORDER);

    const [products, setProducts] = useState([]);
    const [productsPerPage, setProductsPerPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cart, setCart] = useState<CartType>({
        item_numbers: 0,
        items: [],
        total: 0,
    });

    const collapToggle = (status: boolean) => {
        if (status !== collapsed) {
            handleChangePage(1, status);
            setCollapsed(status);
        }
    };

    const handleChangePage = (page: number, collapStatus = collapsed) => {
        const perPage = collapStatus == true ? 15 : 9;
        if (page < 1 || perPage * (page - 1) > products?.length) return;
        const items = products.slice((page - 1) * perPage, perPage * page);
        setProductsPerPage(items);
        setCurrentPage(page);
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
            const perPage = collapsed == true ? 15 : 9;
            const items = arg.slice(0, perPage);
            setProducts(arg);
            setProductsPerPage(items);
        });
        window.ipc.on(IPC_MESSAGE.GET_CART_ITEMS_REPLY, (arg: any) => {
            setCart(arg);
        });
    }, []);

    return (
        <div className="py-6">
            <ProductCartHeader
                setCollapsed={collapToggle}
                collapsed={collapsed}
                purchaseStatus={purchaseStatus}
                setPurchaseStatus={changePurchaseStatus}
                cart={cart}
            ></ProductCartHeader>

            <div className="grid h-[850px] grid-cols-5 bg-transparent">
                <div
                    className={`${collapsed ? 'col-span-5' : 'col-span-3'}  no-scrollbar h-full  overflow-x-scroll py-4`}
                >
                    <ProductCatalog
                        collapsed={collapsed}
                        products={productsPerPage}
                    ></ProductCatalog>
                </div>

                <div
                    className={`${collapsed ? 'hidden' : 'col-span-2 overflow-hidden'} h-[850px] pb-4`}
                >
                    {getStatusComponent(purchaseStatus)}
                </div>
            </div>
            <div className="flex justify-center gap-x-4 py-4">
                <PrimaryButton
                    className="!px-16"
                    background="bg-primary-600"
                    content="Prev"
                    onClick={() => handleChangePage(currentPage - 1)}
                ></PrimaryButton>
                <PrimaryButton
                    className="!px-16"
                    background="bg-primary-600"
                    content="Next"
                    onClick={() => handleChangePage(currentPage + 1)}
                ></PrimaryButton>
            </div>
        </div>
    );
};

export default ProductCartWrapper;
