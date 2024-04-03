import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@nextron-app/common";

// const ProductCatalog = (props: { products: IProduct[]; collapsed: Boolean }) => {
//     //

//     return (
//         <>
//             <div
//                 className={`${
//                     props.collapsed ? "grid-cols-5" : "grid-cols-3"
//                 } grid h-full grid-rows-3 gap-6`}
//             >
//                 {props.products.map((item, id) => {
//                     return (
//                         <div className="" key={id}>
//                             <ProductCard
//                                 id={item.id}
//                                 thumbnail={item.thumbnail}
//                                 price={item.price}
//                                 name_en={item.name_en}
//                                 name_vi={item.name_vi}
//                                 sellPrice={item.sellPrice}
//                                 amount={item.amount}
//                                 discount={item.discount}
//                             ></ProductCard>
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

const ProductCatalog = (props: { products: IProduct[]; collapsed: boolean }) => {
    const [perPage, setPerPage] = useState(props.collapsed ? 15 : 9);
    const [pageNumber, setPageNumber] = useState(Math.ceil(props.products.length / perPage));
    const arr = new Array(pageNumber).fill(0);

    useEffect(() => {
        const newPerPage = props.collapsed ? 15 : 9;
        setPerPage(newPerPage);
        setPageNumber(Math.ceil(props.products.length / perPage));
    }, [props.products]);

    return (
        <div className="snap-x mx-auto snap-mandatory h-full flex w-full small-scrollbar overflow-x-scroll overflow-y-visible gap-x-4">
            {arr.map((val, idx) => {
                const items = props.products.slice(idx * perPage, (idx + 1) * perPage);
                return (
                    <div
                        className="snap-start bg-transparent flex-shrink-0 h-full flex items-center justify-center w-full pb-4"
                        key={idx}
                    >
                        <div
                            className={`${
                                props.collapsed ? "grid-cols-5" : "grid-cols-3"
                            } grid h-full w-full grid-rows-3 gap-y-6 gap-x-2`}
                        >
                            {items.map((item, id) => {
                                return (
                                    <div className="px-2" key={id}>
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
                );
            })}
        </div>
    );
};

export default ProductCatalog;
