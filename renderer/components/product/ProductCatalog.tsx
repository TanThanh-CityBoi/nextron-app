import { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

import Cart from '../cart/Cart';
import ProductCard from './ProductCard';
import { IPC_MESSAGE } from '@/common/ipc-message';

const ProductCatalog = () => {
    const homeT = useTranslation('home');

    const [collapsed, setCollapsed] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        window.ipc.send(IPC_MESSAGE.GET_LIST_PRODUCTS, {});
        window.ipc.on(IPC_MESSAGE.GET_LIST_PRODUCTS_REPLY, (arg: any) => {
            setProducts(arg);
        });
    }, []);

    return (
        <div className="">
            <div className="grid grid-cols-12">
                <div className={`${collapsed ? 'col-span-10' : 'col-span-8'}`}>
                    <div className="bg-primary-600 line-clamp-1 w-max rounded-e-full px-4 py-2 font-semibold text-gray-100">
                        <h5>{homeT.t('product_list.title')}</h5>
                    </div>
                </div>
                <div className={`${collapsed ? 'col-span-2' : 'col-span-4'} relative`}>
                    <button
                        className="bg-primary-600 w-full py-2 ps-8"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <h5 className="line-clamp-1 font-semibold text-white">
                            {homeT.t('cart.title', { amount: 1 })}
                        </h5>

                        <span className="bg-primary-600 absolute -left-8 -top-2.5 h-16 w-16 rounded-full p-1">
                            <span className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                <FaCartShopping className="text-primary-600" size={25} />
                            </span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="grid h-[50vh] grid-cols-12">
                <div
                    className={`${collapsed ? 'col-span-12' : 'col-span-8'} no-scrollbar mt-4 overflow-x-scroll`}
                >
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(11rem,100%),1fr))] gap-x-4 gap-y-6 px-4 pb-4">
                        {products.map((item, id) => {
                            return (
                                <div className="" key={id}>
                                    <ProductCard
                                        id={item.id}
                                        thumbnail={item.thumbnail}
                                        price={item.price}
                                        name_en={item.name_en}
                                        name_vi={item.name_vi}
                                        sellPrice={item.sellPrice}
                                        amount={item.amount}
                                        discount={item.discount}
                                    ></ProductCard>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={`${collapsed ? 'hidden' : 'col-span-4'}`}>
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default ProductCatalog;
