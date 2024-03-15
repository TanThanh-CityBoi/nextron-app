export type CartType = {
    total: number;
    item_numbers: number;
    items: Array<{
        id: number;
        name_en: string;
        name_vi: string;
        price: number;
        amount: number;
        thumbnail: string;
    }>;
};

export type ProductType = {
    id: number;
    name_en: string;
    name_vi: string;
    price: number;
    sellPrice: number;
    amount: number;
    thumbnail: string;
    discount?: number;
};
