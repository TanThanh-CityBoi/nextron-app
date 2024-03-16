import ProductCard from './ProductCard';
import { ProductType } from '@/common/type';

const ProductCatalog = (props: { products: ProductType[] }) => {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(11rem,100%),1fr))] gap-x-4 gap-y-6 px-4 pb-4">
            {props?.products.map((item, id) => {
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
    );
};

export default ProductCatalog;
