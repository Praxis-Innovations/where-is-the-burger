import type { MenuItem, MenuCategoryMeta, Review } from '@/types'

export const INSTAGRAM_URL = 'https://www.instagram.com/wherestheburger/'
export const TIKTOK_URL = 'https://www.tiktok.com/@wheres.the.burger'
export const GOOGLE_URL = 'https://share.google/vrxAWnZ1oSgagzieF'
export const UBER_EATS_URL =
  'https://www.ubereats.com/ca/store/wheres-the-burger/HDMbzKirRs2BntrHkijcgg'
export const ADDRESS = '1300 Steeles Ave E, Brampton, ON L6T 4T2'
export const PHONE = '647-395-9091'
export const PHONE_HREF = 'tel:+16473959091'
export const EMAIL = 'sukhdeep@wherestheburger.com'
export const EMAIL_HREF = 'mailto:sukhdeep@wherestheburger.com'

export const GOOGLE_MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=1300+Steeles+Ave+E,+Brampton,+ON+L6T+4T2&z=15&output=embed'
export const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=1300+Steeles+Ave+E,+Brampton,+ON+L6T+4T2'

export const hours = [
  { day: 'Wednesday', time: '3:00 PM – 12:00 AM' },
  { day: 'Thursday', time: '3:00 PM – 12:00 AM' },
  { day: 'Friday', time: '3:00 PM – 1:00 AM' },
  { day: 'Saturday', time: '3:00 PM – 1:00 AM' },
  { day: 'Sunday', time: '3:00 PM – 12:00 AM' },
  { day: 'Mon – Tue', time: 'Closed' },
]

export const menuCategories: MenuCategoryMeta[] = [
  { id: 'veg-burgers', label: 'Veg Burgers', emoji: 'leaf' },
  { id: 'nonveg-burgers', label: 'Non-Veg Burgers', emoji: 'drumstick' },
  { id: 'sides', label: 'Sides', emoji: 'fries' },
  { id: 'desserts', label: 'One and Only Dessert', emoji: 'bread' },
  { id: 'drinks', label: 'Drinks', emoji: 'cup' },
]

export const menuItems: MenuItem[] = [
  {
    id: 'mash-potash',
    name: 'Mash Potash',
    price: 11.0,
    description:
      'A re-crafted potato patty topped with creamy tangy sauce, fresh lettuce, tomatoes, onions, guacamole, creamy tandoori sauce, house-made Tami Rami sauce, and fresh cilantro in a soft toasted brioche bun.',
    image: '/images/food/mash-potash-veg.jpeg',
    category: 'veg-burgers',
    isVegetarian: true,
    isFeatured: false,
    featuredTagline: 'The potato patty that changed everything',
  },
  {
    id: 'green-bean',
    name: 'Green Bean',
    price: 13.0,
    description:
      'A crispy handcrafted vegetable patty made from a flavorful blend of fresh vegetables, topped with crisp iceberg lettuce, onion rings, creamy tandoori sauce, jalapeños, house-made Tami Rami sauce, fresh cilantro.',
    image: '/images/food/green-bean-veg.jpeg',
    category: 'veg-burgers',
    isVegetarian: true,
  },
  {
    id: 'paneer-pioneer',
    name: 'Paneer Pioneer',
    price: 13.5,
    description:
      'A golden crispy crumbled paneer patty topped with fresh lettuce, dry roasted onions, creamy tandoori sauce, house-made Tami Rami sauce, and fresh cilantro in a soft toasted brioche bun.',
    image: '/images/food/paneer-pioneer-veg.jpeg',
    category: 'veg-burgers',
    isVegetarian: true,
    isFeatured: true,
    featuredTagline: 'Golden crispy paneer magic',
  },
  {
    id: 'little-champ',
    name: 'Little Champ Burger',
    price: 6.0,
    description:
      'Big smiles in a little burger! Two slices of cheese layered with crisp lettuce, fresh tomatoes and onions, served on a soft brioche bun.',
    image: undefined,
    category: 'veg-burgers',
    isVegetarian: true,
  },
  {
    id: 'munchy-crunchy',
    name: 'Munchy Crunchy',
    price: 14.0,
    description:
      'A golden buttery crispy chicken patty topped with dry roasted onions, jalapeños, creamy tandoori sauce, fresh lettuce, house-made Tami Rami sauce, and fresh cilantro in a soft toasted brioche bun.',
    image: '/images/food/munchy-crunchy-non-veg.jpeg',
    category: 'nonveg-burgers',
    isVegetarian: false,
    isFeatured: true,
    featuredTagline: 'The crowd-favourite crunch',
  },
  {
    id: 'chickly-pickly',
    name: 'Chickly Pickly',
    price: 14.0,
    description:
      'A golden crispy 5-spice infused chicken patty topped with creamy tangy sauce, fresh lettuce, tomatoes, onions, guacamole, creamy tandoori sauce, house-made Tami Rami sauce, and fresh cilantro.',
    image: '/images/food/chickly-pickly-non-veg.jpeg',
    category: 'nonveg-burgers',
    isVegetarian: false,
  },
  {
    id: 'dirty-fries',
    name: 'Dirty Fries - Paneer or Chicken',
    price: 13.0,
    description:
      'Crispy golden fries piled high with your choice of seasoned paneer or chicken, layered with melted cheese, signature sauces, onions, tomatoes, cilantro, crispy onions and jalapeños.',
    image: '/images/food/dirty-fries-veg-and-non-veg.jpeg',
    category: 'sides',
    isVegetarian: 'both',
    isFeatured: true,
    featuredTagline: 'Dangerously loaded fries',
  },
  {
    id: 'paneer-popcorn',
    name: 'Paneer Popcorn',
    price: 9.5,
    description:
      'Crispy handcrafted paneer bites, fried to golden perfection with a flavorful seasoned coating. Crunchy on the outside, tender and cheesy on the inside, drizzled with signature sauces.',
    image: '/images/food/paneer-popcorn.png',
    category: 'sides',
    isVegetarian: true,
  },
  {
    id: 'dreamy-creamy-pistachio',
    name: 'Dreamy Creamy Sandos Pistachio',
    price: 8.5,
    description:
      'A perfectly toasted Japanese milk bread loaded with silky pistachio cream, finished with pistachio glaze and topped with crunchy roasted pistachios.',
    image: '/images/food/Dreamy-Creamy-Sandos-Pistachio.jpeg',
    category: 'desserts',
    isVegetarian: true,
    isFeatured: true,
    featuredTagline: 'The sweet finale',
  },
  {
    id: 'dreamy-creamy-dulce',
    name: 'Dreamy Creamy Sando Dulche de Leche',
    price: 8.5,
    description:
      'A perfectly toasted Japanese milk bread loaded with silky Dulche de Leche cream, finished with caramel glaze and topped with crunchy roasted sliced almonds.',
    image: '/images/food/Dreamy-Creamy-Sando-Dulche-de-Leche.jpeg',
    category: 'desserts',
    isVegetarian: true,
  },
  {
    id: 'dreamy-creamy-biscoff',
    name: 'Dreamy Creamy Sando Biscoff',
    price: 8.5,
    description:
      'A perfectly toasted Japanese milk bread loaded with smooth biscoff cream, finished with biscoff glaze, and topped with biscoff crumbs.',
    image: '/images/food/Dreamy-Creamy-Sando-Biscoff.jpeg',
    category: 'desserts',
    isVegetarian: true,
  },
  {
    id: 'mango-shake',
    name: 'Mango-Ish Shake',
    price: 7.5,
    description:
      'Thick, creamy and bursting with mango goodness! Our Mango Shake is layered with rich mango glaze, topped with fluffy whipped cream and a generous sprinkle of pistachio crumbles.',
    image: '/images/food/Mango-Ish-Shake.jpeg',
    category: 'drinks',
    isVegetarian: true,
  },
  {
    id: 'straw-a-berry-shake',
    name: 'Straw-A-Berry Shake',
    price: 7.5,
    description:
      'A rich and creamy strawberry shake layered with luscious strawberry glaze, topped with fluffy whipped cream and crunchy pistachio crumbles.',
    image: '/images/food/straw-a-berry-shake.png',
    category: 'drinks',
    isVegetarian: true,
  },
  {
    id: 'pop',
    name: 'Pop',
    price: 2.0,
    description: 'Refreshing canned pop to wash it all down.',
    category: 'drinks',
    isVegetarian: true,
  },
  {
    id: 'water',
    name: 'Water',
    price: 2.0,
    description: 'Stay hydrated between bites.',
    category: 'drinks',
    isVegetarian: true,
  },
]

export const featuredItems = menuItems.filter((item) => item.isFeatured)

const allReviews: Review[] = [
  {
    id: '1',
    author: 'Sukhveer Waraich',
    rating: 5,
    text: "I just moved from Vancouver and tried a lot of food trucks in Brampton but this place is best in Brampton. I had their Green Bean burger, Dreamy Creamy Sandos and Mango shake. Burger was super delightful. Will always come here for burger and shakes.",
    source: 'Google',
  },
  {
    id: '2',
    author: 'Divyadeep Maan',
    rating: 5,
    text: "Fresh, flavorful, and absolutely delicious. The burgers are outstanding, the desserts are amazing, and the unique menu names make the whole experience even more memorable. Highly recommend!",
    source: 'Google',
  },
  {
    id: '3',
    author: 'Neena D.',
    rating: 5,
    text: "Just tried this burger joint and all I can say is that I was pleasantly surprised. This place is a diamond in the rough. I had the paneer pioneer burger, dulche de leche sandos and the paneer popcorn. Definitely coming back here again!",
    source: 'Google',
  },
  {
    id: '4',
    author: 'Navdeep Chahal',
    rating: 5,
    text: "Absolutely loved the burger! The chicken was crispy and juicy, and the toppings were fresh and flavorful. Everything tasted well balanced, and the portion size was satisfying. Definitely one of the best burger spots in Brampton.",
    source: 'Google',
  },
  {
    id: '5',
    author: 'Simran Dhanjal',
    rating: 5,
    text: "The dreamy creamy sandos were amazing, I got the biscoff one and it was light, creamy, and flavourful. The munchy crunchy burger was one of the best burgers I've ever had. I highly recommend coming here.",
    source: 'Google',
  },
  {
    id: '6',
    author: 'Harpreet Bajwa',
    rating: 5,
    text: "The food here is absolutely delicious! Every dish we tried was bursting with flavor and cooked to perfection. Highly recommend the paneer popcorn — it's a must try for anyone visiting!!!",
    source: 'Google',
  },
  {
    id: '7',
    author: 'Chanpreet Gill',
    rating: 5,
    text: "The burger was delicious and well-made. Great taste, fresh ingredients, and friendly service. Definitely worth a visit if you're looking for a good burger. Highly recommended!",
    source: 'Google',
  },
  {
    id: '8',
    author: 'Harmandeep Kaur',
    rating: 5,
    text: "We have tried loaded chicken (butterfly fries) for the first time from this place. Really liked it, totally different concept. The cheese pull was awesome. Definitely going there again.",
    source: 'Google',
  },
  {
    id: '9',
    author: 'Sameer Ahuja',
    rating: 5,
    text: "Best food truck in the city. Paneer popcorn were so good and the burgers are amazing. Definitely will come back.",
    source: 'Google',
  },
]

export const reviews: Review[] = allReviews
