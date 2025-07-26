import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const DishCard = ({ dish }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(dish));
  };

  return (
    <div>
      <h3>{dish.name}</h3>
      <p>₹{dish.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default DishCard;
