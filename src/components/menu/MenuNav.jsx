import React, { use } from 'react'
import { useNavigate,Link} from 'react-router-dom';
const MenuNav = (props) => {
    const categories = [
        { name: "Starters & Snacks ", link: "starters-snacks" },
        { name: "Main Courses", link: "main_Courses" },
        { name: "Sides", link: "sides" },
        { name: "Beverages", link: "beverages" },
        { name: "Desserts", link: "desserts" },
        { name: "Others", link: "others" }
    ]




return (
    <div>
        <div className='w-full h-20 bg-[#8a5353c4] flex items-center justify-center font-cursive text-2xl font-bold text-white'>
        </div>

        <div className='flex gap-8  justify-center items-center bg-[#f5f5f5] dark:bg-gray-800 py-4 border-b-2 border-gray-300 dark:border-gray-700 mb-4 p-4' >
            {categories.map((category, index) => (
                <Link
                    key={index}
                    to={`/menu/${category.link}`}
                    className={` p-2 text-lg font-light text-gray-700  dark:text-gray-300  ${
                        props.onPage === category.link
                            ? 'border-b-2 border-green-500 text-red-600 dark:text-yellow-300'
                            : 'hover:text-[#a37565] dark:hover:text-[#86C232] '
                    } transition-colors  duration-300`}
                >
                    {category.name}
                </Link>
            ))}
        </div>
    </div>
)
}

export default MenuNav