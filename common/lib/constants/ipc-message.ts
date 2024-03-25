export const IPC_MESSAGE = {
    // renderer send
    GET_CART_INFO: 'GET_CART_INFO',
    GET_LIST_PRODUCTS: 'GET_LIST_PRODUCTS',
    GET_LIST_CATEGORIES: 'GET_LIST_CATEGORIES',
    GET_PAYMENT_METHODS: 'GET_PAYMENT_METHODS',
    //
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
    UPDATE_PURCHASE_STATUS: 'UPDATE_PURCHASE_STATUS',
    FILTER_PRODUCT_CATEGORY: 'FILTER_PRODUCT_CATEGORY',
    //
    CREATE_MODAL: 'CREATE_MODAL',
    WINDOW_ACTION_TRACK: 'WINDOW_ACTION_TRACK',
    // main reply
    GET_CART_INFO_REPLY: 'GET_CART_INFO_REPLY',
    GET_LIST_PRODUCTS_REPLY: 'GET_LIST_PRODUCTS_REPLY',
    GET_LIST_CATEGORIES_REPLY: 'GET_LIST_CATEGORIES_REPLY',
    GET_PAYMENT_METHODS_REPLY: 'GET_PAYMENT_METHODS_REPLY',
    //
    MODAL_SHOW: 'MODAL_SHOW',
    FILTER_PRODUCT_CATEGORY_REPLY: 'FILTER_PRODUCT_CATEGORY_REPLY',
};