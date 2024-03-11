import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

import Cart from '../cart/Cart';
import ProductCard from './ProductCard';

const ProductCatalog = () => {
    const products = [
        {
            name: 'Coca-cola',
            price: 10000,
            sellPrice: 9000,
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
            amount: 10,
            discount: 30,
        },
        {
            name: 'Coca-cola',
            sellPrice: 9000,
            price: 10000,
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
            amount: 10,
            discount: 30,
        },
        {
            name: 'Coca-cola',
            sellPrice: 9000,
            price: 10000,
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
            amount: 10,
            discount: 30,
        },
        {
            name: 'Coca-cola',
            sellPrice: 9000,
            price: 10000,
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
            amount: 10,
            discount: 30,
        },
        {
            name: 'Coca-cola',
            sellPrice: 9000,
            price: 10000,
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU',
            amount: 10,
            discount: 30,
        },
    ];

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="">
            <div className="grid grid-cols-12">
                <div className={`${collapsed ? 'col-span-10' : 'col-span-8'} py-2`}>
                    <div className="bg-primary-600 line-clamp-1 w-max rounded-e-full px-4 py-2 font-semibold text-gray-100">
                        <h5> Danh sách sản phẩm</h5>
                    </div>
                </div>
                <div className={`${collapsed ? 'col-span-2' : 'col-span-4'} relative py-2`}>
                    <button
                        className="bg-primary-600 w-full py-2 ps-4"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <h5 className="line-clamp-1 font-semibold text-white">
                            Giỏ hàng(1 sản phẩm)
                        </h5>

                        <span className="bg-primary-600 absolute -left-12 -top-1 h-16 w-16 rounded-full p-1">
                            <span className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                <FaCartShopping className="text-primary-600" size={25} />
                            </span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="grid h-[50vh] grid-cols-12">
                <div className={`${collapsed ? 'col-span-12' : 'col-span-8'} pt-4`}>
                    <div className="small-scrollbar grid grid-cols-[repeat(auto-fill,minmax(min(12rem,100%),1fr))] gap-x-4 gap-y-6 overflow-x-scroll px-4 pb-4">
                        {products.map((item, id) => {
                            return (
                                <div className="" key={id}>
                                    <ProductCard
                                        thumbnail={item.thumbnail}
                                        price={item.price}
                                        name={item.name}
                                        sellPrice={item.sellPrice}
                                        amount={item.amount}
                                        discount={item.discount}
                                    ></ProductCard>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={`bg-gray-400 ${collapsed ? 'hidden' : 'col-span-4'}`}>
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default ProductCatalog;
