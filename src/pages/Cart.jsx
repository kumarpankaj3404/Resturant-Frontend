import { useSelector, useDispatch } from "react-redux";
import { addItem, incrementItem, decrementItem ,deleteItem } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { sub } from "motion/react-client";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const arr = Object.values(items);
  console.log(arr);
  let subTotal = 0;
  let itemsQuantity = 0;
  const discount = 0;
  arr.forEach((item) => {
    subTotal += item.price * item.qty;
    itemsQuantity += item.qty;
  });

  const total = (subTotal + (subTotal * 0.09)) - discount; // Including 9% tax
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
              <img src={item.menuThumbnail} alt="" className="w-24 h-24"/>
              <div className="text-left text-sm text-gray-400 font">
                <h1 className="text-lg text-black font-heading ">{item.name}</h1>
                <h1 className="" >{item.category}</h1>
                <h1>{item.cuisine}</h1>
              </div>
              
            </div>
            
            <h1 className="w-24">${item.price}</h1>
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
            <h1 className="w-24">${(item.price * item.qty).toFixed(2)}</h1>
          </div>
        ))}
        </div>
        {/* <div className="text-right text-2xl font-bold mt-4">SUBTOTAL - ${total}</div> */}

        <div className="flex justify-between items-center mt-4">
          <div className="text-lg border-2  font-bold bg-cyan-600 w-36 text-white text-center py-1 rounded-lg  hover:border-cyan-600 hover:bg-white hover:text-cyan-600 transition-all duration-300 cursor-pointer " onClick={handleAddItems}>ADD ITEMS</div>

          </div>
        </div>

     </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 p-4 bg-gradient-to-r from-green-400  to-green-600  px-16 lg:mb-14" >
          <h1 className="font-bold " >Rewards and Offers ✨</h1>
          <div className="cursor-pointer">
            Offers
          </div>
        </div>

        <div className="flex flex-col lg:py-10 lg:px-20 bg-ordercost gap-2">
        <h1 className="text-md font-bold">BILL DETAILS</h1>
        <div className="flex justify-between lg:mt-8">
          <h1>Sub Total</h1>
          <h1>${subTotal.toFixed(2)}</h1>
        </div>
        <div className="flex justify-between ">
          <h1>Discount</h1>
          <h1 className="text-green-800">-0.00</h1>
        </div>
        <div className="flex justify-between lg:pb-6">
          <h1>Taxes</h1>
          <h1 className="">${(subTotal*0.09).toFixed(2)}</h1>
        </div>

        {/* Total */}
        <div className="flex justify-between lg:py-5 border-t-2 border-gray-400">
          <h1>Total</h1>
          <h1 className="">${total.toFixed(2)}</h1>
        </div>
        </div>

        <div className="lg:my-14 lg:mx-20 bg-orderwarning p-3 rounded-xl">
          <h1 className="text-lg font-medium"><span className="text-red-500">!!</span> Order once placed cannot be cancelled <span className="text-red-500">!!</span></h1>
          <p>Review your order and address details to avoid cancellations. Please avoid cancellations to prevent food wastage.
          </p>
        </div>

        { arr.length > 0 ? (
          <div className="">
            <div className="flex lg:px-20 lg:py-3 justify-between items-center bg-green-500">
              <div>
                <p className="text-xs font-bold text-cyan-600">{itemsQuantity} ITEM ADDED</p>
                <h1>{arr[0].Name} {itemsQuantity > 1 ? ("...+" + (itemsQuantity-1) + " items") : "" }</h1>
              </div>
              <div>
                <h1 className="font-semibold text-lg">TOTAL - ${total.toFixed(2)}</h1>
              </div>
            </div>
            <div className="flex  lg:px-20 lg:py-3 justify-between items-center bg-green-700">
              <button className="">PAYMENT</button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        

        
    </div>
  );
};

export default Cart;
