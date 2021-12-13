import React from "react";
import { connect } from "react-redux";
import { removeProductFromBasket } from "./actions";

// You can use console.log for debugging purposes.

// This component is already implemented and working as expected.
// `Please focus on Redux related parts.

 
export function Basket({ products = [],onRemove, totalPrice = 0.0 }) {

   
 
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id} id={`product-${product.id}`}>
            <span>Name: {product.name}</span>
            <span>Quantity: {product.quantity}</span>
            <button
              
              onClick={() => onRemove(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        Total price: <span id="total-price">{totalPrice}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.basket.products ,
     totalPrice: state.basket.products.reduce(
    //reduce go through the array and cartItem is the each item in the array
    (accumulatedTotal, product) =>
      accumulatedTotal + product.price * product.quantity,
    0 //0 is the start point of accumulatedTotal
  )
  }
};

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeProductFromBasket(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Basket);
