import { useSelector, useDispatch } from "react-redux";
import { addItem, incrementItem, decrementItem ,deleteItem } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const arr = Object.values(items);
  console.log(arr);
  let total = 0;
  let itemsQuantity = 0;
  arr.forEach((item) => {
    total += item.Price * item.qty;
    itemsQuantity += item.qty;
  });
  const handleAddItems = () => {
    navigate('/menu/starters-snacks');
  }

  return (
    <div className="">
       <div className="lg:m-20 lg: md:m-6 m-4   ">
      <h1 className="text-5xl  font-bold mb-4 text-center">Your <span className="text-cyan-600">Cart</span></h1>
      <p className="font-bold text-gray-500 text-sm">You have <span className="text-cyan-600">{itemsQuantity} items</span>  in your order</p>
      <div className="border-2 border-gray-200 m-4 p-4">
        <div className="flex justify-between items-center mt-2 font-bold text-center border-b-2 border-gray-200 pb-2">
          <h1 className="w-72">NAME</h1>
          <h1 className="w-24">PRICE</h1>
          <h1 className="w-16">QTY.</h1>
          <h1 className="w-24">TOTAL</h1>
        </div>
        <div>
        {arr.map((item) => (
          <div key={item._id} className="flex justify-between items-center mt-2 text-center border-b-2 border-gray-200 pb-2 pt-2">
            <div className="flex items-start space-x-4 w-80">
              <img src={item.Thumbnail} alt="" className="w-24 h-24"/>
              <div className="text-left text-sm text-gray-400 font">
                <h1 className="text-lg text-black font-heading ">{item.Name}</h1>
                <h1 className="" >{item.Category}</h1>
                <h1>{item.Cuisine_Type}</h1>
              </div>
              
            </div>
            
            <h1 className="w-24">${item.Price}</h1>
            <div className="flex items-center justify-center space-x-2 ">
              <button
                onClick={() => dispatch(decrementItem(item._id))}
                className="px-2 py-1 bg-red-200 text-black hover:bg-red-500 rounded"
              >
                -
              </button>
              <span className="w-12">{item.qty}</span>
              <button
                onClick={() => dispatch(incrementItem(item._id))}
                className="px-2 py-1 bg-green-200 text-black hover:bg-green-500 rounded"
              >
                +
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 hover:text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => dispatch(deleteItem(item._id))}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h1 className="w-24">${(item.Price * item.qty).toFixed(2)}</h1>
          </div>
        ))}
        </div>
        <div className="text-right text-2xl font-bold mt-4">SUBTOTAL - ${total}</div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-xl border-2  font-bold bg-cyan-600 w-56 text-white text-center pt-2 pb-2 rounded-lg  hover:border-cyan-600 hover:bg-white hover:text-cyan-600 transition-all duration-300 cursor-pointer " onClick={handleAddItems}>ADD ITEMS</div>
          <div className="text-xl border-2  font-bold bg-cyan-600 w-56 text-white text-center pt-2 pb-2 rounded-lg  hover:border-cyan-600 hover:bg-white hover:text-cyan-600 transition-all duration-300 cursor-pointer">CHECKOUT</div>

        </div>
      </div>

       </div>
    </div>
  );
};

export default Cart;
