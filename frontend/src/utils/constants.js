

// Restaurant Information
export const RESTAURANT_NAME = "THE PANKY PUNKY PLACE";
export const RESTAURANT_TYPE = "Indian Restaurant";
export const RESTAURANT_SLOGAN = "Authentic Indian Cuisine";


export const WELCOME_SECTION = {
  type: "Indian Restaurant",
  title: "WELCOME",
  description: "Experience the authentic flavors of all the states in the heart of India. Our passionate chefs bring traditional recipes to life with the finest ingredients, creating unforgettable dining experiences that transport you straight to the streets of Punjab and the hills of Himachal.",
  buttonText: "Our Story"
};

export const EAT_SECTION = {
  title: "Eat.",
  subtitle: "Breakfast, Lunch and Dinner",
  description: "Start your day with our freshly baked pastries and beverages, or enjoy a leisurely lunch featuring our signature panner dishes and wood-fired chicken. Every bite tells a story of tradition and passion.",
  buttonText: "See More"
};

export const DRINK_SECTION = {
  title: "Drink.",
  subtitle: "The Finest Drinks",
  description: "Savor carefully selected wines from renowned vineyards, or enjoy our expertly crafted espresso and cappuccino. Our sommelier ensures the perfect pairing for every dish.",
  buttonText: "See More"
};

export const ENJOY_SECTION = {
  title: "Enjoy.",
  subtitle: "Make Yourself at Home",
  description: "Relax in our warm, inviting atmosphere where every detail is designed to make you feel at home. From our rustic decor to our attentive service, we create the perfect setting for memorable moments.",
  buttonText: "Visit Us"
};


// Contact Information
export const CONTACT_INFO = {
  address: "8th floor, 379 Hyd St, INDIA, IND 10018",
  phone: "(+91) 96 716 6879",
  email: "contact@thepankypunkyplace.com",
  openingHours: {
    weekdays: "11:00 AM - 10:00 PM",
    saturday: "10:00 AM - 11:00 PM",
    sunday: "10:00 AM - 9:00 PM",
   
  }
};


// Navigation Links
export const NAV_LINKS = [
  { text: "HOME", path: "/" },
  { text: "MENU", path: "/menu" },
  { text: "RESERVATION", path: "/reservation" },
  { text: "GALLERY", path: "/gallery" },
  { text: "ABOUT", path: "/about" },
  { text: "REVIEW", path: "/review" }
];

// Sections
export const HERO_SECTION = {
  title: "Welcome to",
  subtitle: "THAT CHINESE REESTAURANT",
  buttonText: "EXPLORE MENU"
};


export const ADDRESS_SECTION = {
  title: "Drop By for a Bite.",
  address: CONTACT_INFO.address,
  openingHours: CONTACT_INFO.openingHours
};


export const FOOTER_SECTION = {
  contactTitle: "CONTACT US",
  openingTitle:"OPENING HOURS",
  galleryTitle: "GALLERY",
  copyright: "© 2025 THE PANKY PUNKY PLACE. All Rights Reserved."
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/thepankypunkyplace",
  twitter: "https://twitter.com/thepankypunkyplace",
  instagram: "https://instagram.com/thepankypunkyplace"
};

// Images
export const IMAGES = {
  heroBackground: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  aboutImage: "https://i.pinimg.com/1200x/49/e4/8b/49e48b4b9e147302cdf7f71570516655.jpg",
  eatImage: "https://i.pinimg.com/1200x/3f/38/2d/3f382d687ae5e39bee09544d6b9f8497.jpg",
  drinkImage: "https://i.pinimg.com/1200x/dd/d5/fa/ddd5fa8ce7d57bcc36a94e5f86947888.jpg",
  enjoyImage: "https://i.pinimg.com/1200x/17/df/b9/17dfb91e63cf334ceefc46c12439f5d4.jpg",
  reservationImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  galleryImages: [
    "https://i.pinimg.com/1200x/94/ce/21/94ce21666dab75ec4bceb9c953073aca.jpg",
    "https://i.pinimg.com/736x/49/01/75/490175145c9bda8584e2a5115292bb3c.jpg",
    "https://i.pinimg.com/1200x/9e/5a/ce/9e5acef85df66c58c9a868e6179cf9aa.jpg",
    "https://i.pinimg.com/1200x/e9/bc/1c/e9bc1c85be7c768d312c6a8de571e6ac.jpg",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://i.pinimg.com/736x/53/43/97/534397daa7e7644ce809651013a40b23.jpg",
    "https://i.pinimg.com/736x/08/26/b4/0826b47bfaebab982736df8bd6b31787.jpg",
    
    "https://i.pinimg.com/736x/c8/a7/c3/c8a7c3a22a8f1e23c11bfe498146f2d6.jpg",
    "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg"
  ]
// }; 
};


export const RESERVATION_SECTION = {
  title: "Reservation",
  subtitle: "BOOK TABLE",
  formFields: {
    date: "Date",
    timeFrom: "Time From",
    timeTo: "Time To",
    name: "Name",
    phone: "Phone",
    people: "People",
    email: "Email",
  },
  buttonText: "BOOK TABLE",
  cancelInfo: "To cancel, please call us directly."
};

export const RESERVATION_TIMES_FROM = [
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "21:00", label: "9:00 PM" },
];

export const RESERVATION_TIMES_TO = [
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "21:00", label: "9:00 PM" },
  { value: "22:00", label: "10:00 PM" },
];



export const PEOPLE_OPTIONS = Array.from({ length: 8 }, (_, i) => {
  const count = i + 1;
  return {
    value: count.toString(),
    label: `${count} ${count === 1 ? 'person' : 'people'}`
  };
});

export const PLACEHOLDERS = {
  name: "Your full name",
  phone: "+91 12345 67890",
  email: "you@example.com"
};