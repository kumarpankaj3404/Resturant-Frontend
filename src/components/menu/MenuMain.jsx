import { div } from "motion/react-client";
import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementItem, decrementItem } from "../../features/cart/cartSlice";
import { useState } from "react";
import api from "../../utils/api.js";
import { useEffect } from "react";
import { menuitem } from "motion/react-m";

const MenuMain = (props) => {
  const menuData = [
    {
      "_id": "itm001",
      "Category": "Starters",
      "Cuisine_Type": "Spanish",
      "Name": "Montaditos Sampler",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 12.99,
      "Description": "A selection of traditional Spanish small sandwiches with various toppings.",
      "Availability": true
    },
    {
      "_id": "itm002",
      "Category": "Starters",
      "Cuisine_Type": "American",
      "Name": "Buffalo Chicken Wings",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 10.50,
      "Description": "Spicy chicken wings served with a side of blue cheese dressing.",
      "Availability": true
    },
    {
      "_id": "itm003",
      "Category": "Starters",
      "Cuisine_Type": "Italian",
      "Name": "Bruschetta",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 8.75,
      "Description": "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
      "Availability": false
    },
    {
      "_id": "itm004",
      "Category": "Starters",
      "Cuisine_Type": "Mexican",
      "Name": "Guacamole & Chips",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 9.25,
      "Description": "Freshly made guacamole served with crispy corn tortilla chips.",
      "Availability": true
    },
    {
      "_id": "itm005",
      "Category": "Starters",
      "Cuisine_Type": "Japanese",
      "Name": "Edamame",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 6.00,
      "Description": "Steamed edamame pods lightly salted, perfect for a light snack.",
      "Availability": true
    },
    {
      "_id": "itm006",
      "Category": "Main Courses",
      "Cuisine_Type": "Italian",
      "Name": "Pepperoni Pizza",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 16.50,
      "Description": "Classic pizza topped with savory pepperoni slices and mozzarella cheese.",
      "Availability": true
    },
    {
      "_id": "itm007",
      "Category": "Main Courses",
      "Cuisine_Type": "American",
      "Name": "Cheeseburger",
      "Thumbnail": "https://images.unsplash.com/photo-1550547660-d9450f859349",
      "Price": 14.00,
      "Description": "A juicy beef patty with cheddar cheese, lettuce, and tomato on a toasted bun.",
      "Availability": true
    },
    {
      "_id": "itm008",
      "Category": "Main Courses",
      "Cuisine_Type": "Mexican",
      "Name": "Chicken Fajitas",
      "Thumbnail": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      "Price": 18.00,
      "Description": "Sizzling strips of chicken with bell peppers and onions, served with tortillas.",
      "Availability": true
    },
    {
      "_id": "itm009",
      "Category": "Main Courses",
      "Cuisine_Type": "Thai",
      "Name": "Pad Thai",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 15.75,
      "Description": "Stir-fried rice noodles with shrimp, tofu, bean sprouts, and peanuts.",
      "Availability": false
    },
    {
      "_id": "itm010",
      "Category": "Main Courses",
      "Cuisine_Type": "Indian",
      "Name": "Chicken Tikka Masala",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 17.25,
      "Description": "Tender pieces of chicken in a creamy, spiced tomato sauce.",
      "Availability": true
    },
    {
      "_id": "itm011",
      "Category": "Desserts",
      "Cuisine_Type": "American",
      "Name": "Chocolate Fudge Brownie",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 7.50,
      "Description": "Rich, decadent chocolate brownie served warm with a scoop of vanilla ice cream.",
      "Availability": true
    },
    {
      "_id": "itm012",
      "Category": "Desserts",
      "Cuisine_Type": "French",
      "Name": "Crème Brûlée",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 8.00,
      "Description": "A classic French dessert with a rich custard base topped with a hard caramel layer.",
      "Availability": true
    },
    {
      "_id": "itm013",
      "Category": "Desserts",
      "Cuisine_Type": "Italian",
      "Name": "Tiramisu",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 9.00,
      "Description": "Coffee-flavored Italian dessert made of ladyfingers dipped in coffee.",
      "Availability": true
    },
    {
      "_id": "itm014",
      "Category": "Desserts",
      "Cuisine_Type": "American",
      "Name": "Cheesecake",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 8.50,
      "Description": "A smooth, creamy cheesecake on a buttery graham cracker crust.",
      "Availability": false
    },
    {
      "_id": "itm015",
      "Category": "Desserts",
      "Cuisine_Type": "Mexican",
      "Name": "Churros",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 7.00,
      "Description": "Fried dough pastries dusted with cinnamon sugar, served with chocolate dipping sauce.",
      "Availability": true
    },
    {
      "_id": "itm016",
      "Category": "Beverages",
      "Cuisine_Type": "Mixed",
      "Name": "Strawberry Banana Smoothie",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 6.50,
      "Description": "A refreshing blend of fresh strawberries, banana, and yogurt.",
      "Availability": true
    },
    {
      "_id": "itm017",
      "Category": "Beverages",
      "Cuisine_Type": "Mixed",
      "Name": "Iced Coffee",
      "Thumbnail": "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      "Price": 5.00,
      "Description": "Cold-brewed coffee served over ice with a hint of vanilla.",
      "Availability": true
    },
    {
      "_id": "itm018",
      "Category": "Beverages",
      "Cuisine_Type": "Mixed",
      "Name": "Lemonade",
      "Thumbnail": "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      "Price": 4.50,
      "Description": "Classic, freshly squeezed lemonade with a hint of mint.",
      "Availability": true
    },
    {
      "_id": "itm019",
      "Category": "Beverages",
      "Cuisine_Type": "Mixed",
      "Name": "Orange Juice",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 4.00,
      "Description": "Freshly squeezed orange juice, rich in Vitamin C.",
      "Availability": false
    },
    {
      "_id": "itm020",
      "Category": "Beverages",
      "Cuisine_Type": "Mixed",
      "Name": "Green Tea",
      "Thumbnail": "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      "Price": 3.50,
      "Description": "A warm, soothing cup of traditional green tea.",
      "Availability": true
    }
  ]
  const [menuItems, setMenuItems] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [Loading, setLoading] = useState(true);

  useEffect(()=>{
    try {
      api.get("/menu/getMenuItem")
      .then((res)=>{
        if(res.data.statusCode === 200){
        setMenuItems(res.data.data);
        console.log("Menu API:", menuItems);
        setLoading(false); 
      }
      })
      .catch((err)=>{
        console.log("Error fetching menu items:", err); 
      })
    } catch (error) {
      console.log("Error in Menu API call:", error);
    }
  },[]);

  




  const type = props.category.replace(/-/g, ' & ').replace(/_/g, ' ').toUpperCase();
  const menuItemsFiltered = menuItems.filter(item => {
    if (props.category === 'starters-snacks') {
      return item.category.toLowerCase() == 'starters';
    } else {
      return item.category.toLowerCase() === props.category.replace(/-/g, ' ').replace(/_/g, ' ').toLowerCase();
    }
  });
  // console.log("Filtered Menu Items:", menuItemsFiltered);

  return (
    <div>
      <h1 className="text-center text-4xl font-thin">{type}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4 sm:m-8 md:m-16">
        {Loading ? "Loading" :  ( menuItemsFiltered.map((item) => (
          <>
            <div
              key={item._id}
              className="border-2 border-b-gray-300 hover:shadow-lg hover:shadow-slate-700 hover:scale-105 p-4 rounded-lg shadow-md flex items-center transition-all duration-300"
              style={{ transitionProperty: 'box-shadow, transform' }}
            >
              <img src={item.menuThumbnail} alt="Loading..." className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-24 rounded-full mr-4" />
              <div>

                <h2 className="text-xl font-bold font-serif">{item.name}</h2>
                <h3 className="text-lg font-light italic ">{item.cuisine}</h3>
                <p className="text-sm text-gray-600 font-light">{item.description}</p>
                <br /><br /><br />
                <div className="flex items-center justify-between">

                  <p>₹{item.price}</p>
                  <div className="w-24">
                    {cartItems[item._id] ? (
                      <div className="w-24 flex items-center justify-between ">
                        <button onClick={() => dispatch(decrementItem(item._id))} className="bg-green-500 w-6 rounded-full hover:bg-green-600 transition-colors duration-300 text-center">
                          -
                        </button>
                        <div className="w-12  text-center">
                          {cartItems[item._id].qty}
                        </div>
                        <button onClick={() => dispatch(incrementItem(item._id))} className="bg-green-500 w-6 rounded-full hover:bg-green-600 transition-colors duration-300 text-center">
                          +
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => dispatch(addItem(item))} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors duration-300">
                        Add Item
                      </button>
                    )}


                  </div>

                </div>

              </div>

            </div>
        </>
          
        )))}
      </div>
    </div>
  )
}

export default MenuMain