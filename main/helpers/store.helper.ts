import { CartType, ProductType } from '@/common/type';
import Store from 'electron-store';

class StoreHelper extends Store {
    constructor(name: string) {
        super({
            name: name || 'local-storage',
        });
    }

    public getCart(): CartType {
        return (this.get('cart') || {
            total: 0,
            item_numbers: 0,
            items: [],
        }) as CartType;
    }

    public setCart(data: CartType) {
        return this.set('cart', data);
    }

    public getProducts(): Array<ProductType> {
        return this.get('products') as Array<ProductType>;
    }

    public setProducts(data: Array<ProductType>) {
        return this.set('products', data);
    }
}

const STORAGE_KEYS = {
    CART: 'cart',
    PRODUCTS: 'products',
    LAST_ACTION: 'last_action',
    PURCHASE_STATUS: 'purchase_status',
    FILTER_PRODUCT_CATEGORIES: 'filter_product_categories',
};

const LocalStorage = new StoreHelper('local-storage');

export { LocalStorage, STORAGE_KEYS };
