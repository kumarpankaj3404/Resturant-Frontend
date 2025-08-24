import { div } from "motion/react-client";
import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementItem, decrementItem } from "../../features/cart/cartSlice";

const MenuMain = (props) => {
  const menuItems = [
    {
      "_id": "itm001",
      "Category": "Starters",
      "Cuisine_Type": "Spanish",
      "Name": "Montaditos Sampler",
      "Thumbnail": "https://images.unsplash.com/photo-1617196038186-3ac4b7c2d7d6",
      "Price": 12.99,
      "Description": "A selection of traditional Spanish small sandwiches with various toppings.",
      "Availability": true
    },
    {
      "_id": "itm002",
      "Category": "Starters",
      "Cuisine_Type": "American",
      "Name": "Buffalo Chicken Wings",
      "Thumbnail": "https://images.unsplash.com/photo-1600891964092-4316c288032e",
      "Price": 10.50,
      "Description": "Spicy chicken wings served with a side of blue cheese dressing.",
      "Availability": true
    },
    {
      "_id": "itm003",
      "Category": "Starters",
      "Cuisine_Type": "Italian",
      "Name": "Bruschetta",
      "Thumbnail": "https://images.unsplash.com/photo-1601924582971-0383ec9a1c43",
      "Price": 8.75,
      "Description": "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
      "Availability": false
    },
    {
      "_id": "itm004",
      "Category": "Starters",
      "Cuisine_Type": "Mexican",
      "Name": "Guacamole & Chips",
      "Thumbnail": "https://images.unsplash.com/photo-1601050690597-df7a9f3c48ef",
      "Price": 9.25,
      "Description": "Freshly made guacamole served with crispy corn tortilla chips.",
      "Availability": true
    },
    {
      "_id": "itm005",
      "Category": "Starters",
      "Cuisine_Type": "Japanese",
      "Name": "Edamame",
      "Thumbnail": "https://images.unsplash.com/photo-1633943099111-d9da6af7d2a4",
      "Price": 6.00,
      "Description": "Steamed edamame pods lightly salted, perfect for a light snack.",
      "Availability": true
    },
    {
      "_id": "itm006",
      "Category": "Main Courses",
      "Cuisine_Type": "Italian",
      "Name": "Pepperoni Pizza",
      "Thumbnail": "https://images.unsplash.com/photo-1601924638867-3ec4af861d6d",
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
      "Thumbnail": "https://images.unsplash.com/photo-1625944653811-f7c36d65cfd0",
      "Price": 15.75,
      "Description": "Stir-fried rice noodles with shrimp, tofu, bean sprouts, and peanuts.",
      "Availability": false
    },
    {
      "_id": "itm010",
      "Category": "Main Courses",
      "Cuisine_Type": "Indian",
      "Name": "Chicken Tikka Masala",
      "Thumbnail": "https://images.unsplash.com/photo-1603898037225-d0bba0d1f55a",
      "Price": 17.25,
      "Description": "Tender pieces of chicken in a creamy, spiced tomato sauce.",
      "Availability": true
    },
    {
      "_id": "itm011",
      "Category": "Desserts",
      "Cuisine_Type": "American",
      "Name": "Chocolate Fudge Brownie",
      "Thumbnail": "https://images.unsplash.com/photo-1601979031976-36caa6f3b1db",
      "Price": 7.50,
      "Description": "Rich, decadent chocolate brownie served warm with a scoop of vanilla ice cream.",
      "Availability": true
    },
    {
      "_id": "itm012",
      "Category": "Desserts",
      "Cuisine_Type": "French",
      "Name": "Crème Brûlée",
      "Thumbnail": "https://images.unsplash.com/photo-1629983995671-d2f86a1e6f4f",
      "Price": 8.00,
      "Description": "A classic French dessert with a rich custard base topped with a hard caramel layer.",
      "Availability": true
    },
    {
      "_id": "itm013",
      "Category": "Desserts",
      "Cuisine_Type": "Italian",
      "Name": "Tiramisu",
      "Thumbnail": "https://images.unsplash.com/photo-1602872028221-1d66d7d1b8a5",
      "Price": 9.00,
      "Description": "Coffee-flavored Italian dessert made of ladyfingers dipped in coffee.",
      "Availability": true
    },
    {
      "_id": "itm014",
      "Category": "Desserts",
      "Cuisine_Type": "American",
      "Name": "Cheesecake",
      "Thumbnail": "https://images.unsplash.com/photo-1599785209707-28ecf9ad7887",
      "Price": 8.50,
      "Description": "A smooth, creamy cheesecake on a buttery graham cracker crust.",
      "Availability": false
    },
    {
      "_id": "itm015",
      "Category": "Desserts",
      "Cuisine_Type": "Mexican",
      "Name": "Churros",
      "Thumbnail": "https://images.unsplash.com/photo-1588186943910-1a2fbf5a5b75",
      "Price": 7.00,
      "Description": "Fried dough pastries dusted with cinnamon sugar, served with chocolate dipping sauce.",
      "Availability": true
    },
    {
      "_id": "itm016",
      "Category": "Beverages",
      "Cuisine_Type": "Mixed",
      "Name": "Strawberry Banana Smoothie",
      "Thumbnail": "https://images.unsplash.com/photo-1577801597111-34e09d9c2d56",
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
      "Thumbnail": "https://images.unsplash.com/photo-1580910051073-cf5d0c93a7f3",
      "Price": 4.00,
      "Description": "Freshly squeezed orange juice, rich in Vitamin C.",
      "Availability": false
    },
    {
      "_id": "itm020",
      "Category": "Beverages",
      "Cuisine_Type": "Mixed",
      "Name": "Green Tea",
      "Thumbnail": "https://images.unsplash.com/photo-1590080875627-8a146fbf8c42",
      "Price": 3.50,
      "Description": "A warm, soothing cup of traditional green tea.",
      "Availability": true
    }
  ]
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const type = props.category.replace(/-/g, ' & ').replace(/_/g, ' ').toUpperCase();
  const menuItemsFiltered = menuItems.filter(item => {
    if (props.category === 'starters-snacks') {
      return item.Category.toLowerCase() === 'starters';
    } else {
      return item.Category.toLowerCase() === props.category.replace(/-/g, ' ').replace(/_/g, ' ').toLowerCase();
    }
  });

  return (
    <div>
      <h1 className="text-center text-4xl font-thin">{type}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4 sm:m-8 md:m-16">
        {menuItemsFiltered.map((item, index) => (
          <div
            key={index}
            className="border-2 border-b-gray-300 hover:shadow-lg hover:shadow-slate-700 hover:scale-105 p-4 rounded-lg shadow-md flex items-center transition-all duration-300"
            style={{ transitionProperty: 'box-shadow, transform' }}
          >

            <img src={item.Thumbnail} alt="Loading..." className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-24 rounded-full mr-4" />
            <div>

              <h2 className="text-xl font-bold font-serif">{item.Name}</h2>
              <h3 className="text-lg font-light italic ">{item.Cuisine_Type}</h3>
              <p className="text-sm text-gray-600 font-light">{item.Description}</p>
              <br /><br /><br />
              <div className="flex items-center justify-between">

                <p>₹{item.Price}</p>
                <div className="w-24">
                  {cartItems[item._id] ? (
                    <div className="flex items-center justify-between">
                      <button onClick={() => dispatch(decrementItem(item._id))}>
                        -
                      </button>
                      <div>
                        {cartItems[item._id].qty}
                      </div>
                      <button onClick={() => dispatch(incrementItem(item._id))}>
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
        ))}
      </div>
    </div>
  )
}

export default MenuMain