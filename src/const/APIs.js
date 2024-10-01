export const BASE_URL_SERVER="https://fakestoreapi.com"
export const APIs = {
        ECOMMERCE: {
            PRODUCTS: {
                GET_ALL_PRODUCT: `${BASE_URL_SERVER}/products//categories`,
                ADD_PRODUCT: `${BASE_URL_SERVER}/products`,
                GET_SINGLE_PRODUCT: `${BASE_URL_SERVER}/products`
            },
            CART: {
                GET_ALL_CARTS:`${BASE_URL_SERVER}/carts`
            },
        },
        
}