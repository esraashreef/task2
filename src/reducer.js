const initialState = {
  products: [],
  totalPrice:0
};
export const totalPrice = (state) => {
    const products = state.products;
    const reducer = (totalPrice, products) => totalPrice + products.price;
    return products.reduce(reducer);
};
export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_BASKET":
     return {
      ...state,
      products: [...state.products, action.payload]
    };
     case "REMOVE_PRODUCT_FROM_BASKET":
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.id)
      };
       
    default:
      return state;
  }
}