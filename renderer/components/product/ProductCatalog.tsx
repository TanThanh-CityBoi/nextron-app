import ProductCard from './ProductCard';
import { ProductType } from '@/common/type';

const ProductCatalog = (props: { products: ProductType[]; collapsed: Boolean }) => {
    //

    return (
        <>
            <div
                className={`${props.collapsed ? 'grid-cols-5' : 'grid-cols-3'} grid gap-x-4 gap-y-4 px-4 pb-4`}
            >
                {props.products.map((item, id) => {
                    return (
                        <div className="min-h-56" key={id}>
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
        </>
    );
};

export default ProductCatalog;
