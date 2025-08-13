import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {items.map((cart) => (
        <div key={cart.id}>
          <h4>{cart.item.name}</h4>
          <p>₹{cart.item.price}</p>
          <button onClick={() => dispatch(removeFromCart(cart.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
