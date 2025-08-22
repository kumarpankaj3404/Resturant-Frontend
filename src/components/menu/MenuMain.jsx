import { div } from "motion/react-client";

const MenuMain = (props) => {
  const menuItems = [
  {
    "Category": "Starters",
    "Cuisine_Type": "Spanish",
    "Name": "Montaditos Sampler",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/17454748832085367962_0",
    "Price": 12.99,
    "Description": "A selection of traditional Spanish small sandwiches with various toppings.",
    "Availability": true
  },
  {
    "Category": "Starters",
    "Cuisine_Type": "American",
    "Name": "Buffalo Chicken Wings",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/17454748832085367962_0",
    "Price": 10.50,
    "Description": "Spicy chicken wings served with a side of blue cheese dressing.",
    "Availability": true
  },
  {
    "Category": "Starters",
    "Cuisine_Type": "Italian",
    "Name": "Bruschetta",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/17454748832085367962_0",
    "Price": 8.75,
    "Description": "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
    "Availability": false
  },
  {
    "Category": "Starters",
    "Cuisine_Type": "Mexican",
    "Name": "Guacamole & Chips",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/17454748832085367962_0",
    "Price": 9.25,
    "Description": "Freshly made guacamole served with crispy corn tortilla chips.",
    "Availability": true
  },
  {
    "Category": "Starters",
    "Cuisine_Type": "Japanese",
    "Name": "Edamame",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/17454748832085367962_0",
    "Price": 6.00,
    "Description": "Steamed edamame pods lightly salted, perfect for a light snack.",
    "Availability": true
  },
  {
    "Category": "Main Courses",
    "Cuisine_Type": "Italian",
    "Name": "Pepperoni Pizza",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/4053711085825283803_0",
    "Price": 16.50,
    "Description": "Classic pizza topped with savory pepperoni slices and mozzarella cheese.",
    "Availability": true
  },
  {
    "Category": "Main Courses",
    "Cuisine_Type": "American",
    "Name": "Cheeseburger",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/4053711085825283803_0",
    "Price": 14.00,
    "Description": "A juicy beef patty with cheddar cheese, lettuce, and tomato on a toasted bun.",
    "Availability": true
  },
  {
    "Category": "Main Courses",
    "Cuisine_Type": "Mexican",
    "Name": "Chicken Fajitas",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/4053711085825283803_0",
    "Price": 18.00,
    "Description": "Sizzling strips of chicken with bell peppers and onions, served with tortillas.",
    "Availability": true
  },
  {
    "Category": "Main Courses",
    "Cuisine_Type": "Thai",
    "Name": "Pad Thai",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/4053711085825283803_0",
    "Price": 15.75,
    "Description": "Stir-fried rice noodles with shrimp, tofu, bean sprouts, and peanuts.",
    "Availability": false
  },
  {
    "Category": "Main Courses",
    "Cuisine_Type": "Indian",
    "Name": "Chicken Tikka Masala",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/4053711085825283803_0",
    "Price": 17.25,
    "Description": "Tender pieces of chicken in a creamy, spiced tomato sauce.",
    "Availability": true
  },
  {
    "Category": "Desserts",
    "Cuisine_Type": "American",
    "Name": "Chocolate Fudge Brownie",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/3539666463851942886_0",
    "Price": 7.50,
    "Description": "Rich, decadent chocolate brownie served warm with a scoop of vanilla ice cream.",
    "Availability": true
  },
  {
    "Category": "Desserts",
    "Cuisine_Type": "French",
    "Name": "Crème Brûlée",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/3539666463851942886_0",
    "Price": 8.00,
    "Description": "A classic French dessert with a rich custard base topped with a hard caramel layer.",
    "Availability": true
  },
  {
    "Category": "Desserts",
    "Cuisine_Type": "Italian",
    "Name": "Tiramisu",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/3539666463851942886_0",
    "Price": 9.00,
    "Description": "Coffee-flavored Italian dessert made of ladyfingers dipped in coffee.",
    "Availability": true
  },
  {
    "Category": "Desserts",
    "Cuisine_Type": "American",
    "Name": "Cheesecake",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/3539666463851942886_0",
    "Price": 8.50,
    "Description": "A smooth, creamy cheesecake on a buttery graham cracker crust.",
    "Availability": false
  },
  {
    "Category": "Desserts",
    "Cuisine_Type": "Mexican",
    "Name": "Churros",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/3539666463851942886_0",
    "Price": 7.00,
    "Description": "Fried dough pastries dusted with cinnamon sugar, served with chocolate dipping sauce.",
    "Availability": true
  },
  {
    "Category": "Beverages",
    "Cuisine_Type": "Mixed",
    "Name": "Strawberry Banana Smoothie",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/8039974534441721779_0",
    "Price": 6.50,
    "Description": "A refreshing blend of fresh strawberries, banana, and yogurt.",
    "Availability": true
  },
  {
    "Category": "Beverages",
    "Cuisine_Type": "Mixed",
    "Name": "Iced Coffee",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/8039974534441721779_0",
    "Price": 5.00,
    "Description": "Cold-brewed coffee served over ice with a hint of vanilla.",
    "Availability": true
  },
  {
    "Category": "Beverages",
    "Cuisine_Type": "Mixed",
    "Name": "Lemonade",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/8039974534441721779_0",
    "Price": 4.50,
    "Description": "Classic, freshly squeezed lemonade with a hint of mint.",
    "Availability": true
  },
  {
    "Category": "Beverages",
    "Cuisine_Type": "Mixed",
    "Name": "Orange Juice",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/8039974534441721779_0",
    "Price": 4.00,
    "Description": "Freshly squeezed orange juice, rich in Vitamin C.",
    "Availability": false
  },
  {
    "Category": "Beverages",
    "Cuisine_Type": "Mixed",
    "Name": "Green Tea",
    "Thumbnail": "http://googleusercontent.com/image_collection/image_retrieval/8039974534441721779_0",
    "Price": 3.50,
    "Description": "A warm, soothing cup of traditional green tea.",
    "Availability": true
  }
]
  const type = props.category.replace(/-/g, ' & ').replace(/_/g,' ').toUpperCase();

  const menuItemsFiltered = menuItems.filter(item => {
    if (props.category === 'starters-snacks') {
      return item.Category.toLowerCase() === 'starters';
    } else {
      return item.Category.toLowerCase() === props.category.replace(/-/g, ' ').replace(/_/g,' ').toLowerCase();
    }
  });

  return (
    <div>
      <h1>Menu - {type}</h1>
      <div className="grid grid-cols-3 gap-4 m-9">
        {menuItemsFiltered.map((item, index) => (
          <div
            key={index}
            className="border-2 border-b-gray-400 hover:shadow-lg hover:shadow-slate-700 hover:scale-105 p-4 rounded-lg shadow-md flex items-center transition-all duration-300"
            style={{ transitionProperty: 'box-shadow, transform' }}
          >
            <img src="https://i.pinimg.com/1200x/e9/e9/3c/e9e93c864ad7ae08b3da08343dfb28f7.jpg" alt="" className="w-28 h-24 rounded-full mr-4"/>
            <div>
              <h2 className="text-xl font-bold font-serif">{item.Name}</h2>
              <h3 className="text-lg font-light italic ">{item.Cuisine_Type}</h3>
              <p className="text-sm text-gray-600 font-light">{item.Description}</p>
              <br /><br /><br />
              <div className="flex items-center justify-between">
                <p>₹{item.Price}</p>
                <div className="flex items-center justify-between w-24">
                  <div>-</div>
                  <p>0</p>
                  <div>+</div>
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