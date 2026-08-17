import type { MenuItem, MenuCategoryMeta, Review } from '@/types'

export const INSTAGRAM_URL = 'https://www.instagram.com/wherestheburger/'
export const GOOGLE_URL = 'https://share.google/vrxAWnZ1oSgagzieF'
export const UBER_EATS_URL =
  'https://www.ubereats.com/ca/store/wheres-the-burger/HDMbzKirRs2BntrHkijcgg'
export const ADDRESS = '1300 Steeles Ave E, Brampton, ON L6T 4T2'
export const PHONE = '647-395-9091'
export const PHONE_HREF = 'tel:+16473959091'

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
  { id: 'desserts', label: 'Desserts', emoji: 'bread' },
  { id: 'drinks', label: 'Drinks', emoji: 'cup' },
]

export const menuItems: MenuItem[] = [
  {
    id: 'mash-potash',
    name: 'Mash Potash',
    price: 11.0,
    description:
      'A re-crafted potato patty topped with creamy tangy sauce, fresh lettuce, tomatoes, onions, guacamole, creamy tandoori sauce, house-made Tami Rami sauce, and fresh cilantro in a soft toasted brioche bun.',
    image: '/images/food/mash-potash.jpeg',
    category: 'veg-burgers',
    isVegetarian: true,
    spiceLevel: 'medium',
    isFeatured: false,
    featuredTagline: 'The potato patty that changed everything',
  },
  {
    id: 'green-bean',
    name: 'Green Bean',
    price: 13.0,
    description:
      'A crispy handcrafted vegetable patty made from a flavorful blend of fresh vegetables, topped with crisp iceberg lettuce, onion rings, creamy tandoori sauce, jalapeños, house-made Tami Rami sauce, fresh cilantro.',
    image: '/images/food/green-bean.jpeg',
    category: 'veg-burgers',
    isVegetarian: true,
    spiceLevel: 'hot',
  },
  {
    id: 'paneer-pioneer',
    name: 'Paneer Pioneer',
    price: 13.5,
    description:
      'A golden crispy crumbled paneer patty topped with fresh lettuce, dry roasted onions, creamy tandoori sauce, house-made Tami Rami sauce, and fresh cilantro in a soft toasted brioche bun.',
    image: '/images/food/paneer-pioneer.jpeg',
    category: 'veg-burgers',
    isVegetarian: true,
    spiceLevel: 'medium',
    isFeatured: true,
    featuredTagline: 'Golden crispy paneer magic',
  },
  {
    id: 'little-champ',
    name: 'Little Champ Burger',
    price: 6.0,
    description:
      'Two slices of cheese layered with crisp lettuce, fresh tomatoes and onions, served on a soft brioche bun.',
    image: '/images/food/little-champ.jpeg',
    category: 'veg-burgers',
    isVegetarian: true,
    spiceLevel: 'mild',
  },
  {
    id: 'munchy-crunchy',
    name: 'Munchy Crunchy',
    price: 14.0,
    description:
      'A golden buttery crispy chicken patty topped with dry roasted onions, jalapeños, creamy tandoori sauce, fresh lettuce, house-made Tami Rami sauce, and fresh cilantro in a soft toasted brioche bun.',
    image: '/images/food/munchy-crunchy.jpeg',
    category: 'nonveg-burgers',
    isVegetarian: false,
    spiceLevel: 'hot',
    isFeatured: true,
    featuredTagline: 'The crowd-favourite crunch',
  },
  {
    id: 'chickly-pickly',
    name: 'Chickly Pickly',
    price: 14.0,
    description:
      'A golden crispy 5-spice infused chicken patty topped with creamy tangy sauce, fresh lettuce, tomatoes, onions, guacamole, creamy tandoori sauce, house-made Tami Rami sauce, and fresh cilantro.',
    image: '/images/food/chickly-pickly.jpeg',
    category: 'nonveg-burgers',
    isVegetarian: false,
    spiceLevel: 'medium',
  },
  {
    id: 'dirty-fries',
    name: 'Dirty Fries',
    price: 13.0,
    description:
      'Crispy golden fries piled high with your choice of seasoned paneer or chicken, layered with melted cheese, signature sauces, onions, tomatoes, cilantro, crispy onions and jalapeños. (Paneer or Chicken)',
    image: '/images/food/dirty-fries.jpeg',
    category: 'sides',
    isVegetarian: false,
    spiceLevel: 'hot',
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
    spiceLevel: 'medium',
  },
  {
    id: 'dreamy-creamy-pistachio',
    name: 'Dreamy Creamy Sando — Pistachio',
    price: 8.5,
    description:
      'A perfectly toasted Japanese milk bread loaded with silky pistachio cream, finished with pistachio glaze and topped with crunchy roasted pistachios.',
    image: '/images/food/dreamy-creamy-pistachio.jpeg',
    category: 'desserts',
    isVegetarian: true,
    spiceLevel: 'mild',
  },
  {
    id: 'dreamy-creamy-dulce',
    name: 'Dreamy Creamy Sando — Dulce de Leche',
    price: 8.5,
    description:
      'A perfectly toasted Japanese milk bread loaded with silky Dulce de Leche cream, finished with caramel glaze and topped with crunchy roasted sliced almonds.',
    image: '/images/food/dreamy-creamy-pistachio.jpeg',
    category: 'desserts',
    isVegetarian: true,
    spiceLevel: 'mild',
  },
  {
    id: 'dreamy-creamy-biscoff',
    name: 'Dreamy Creamy Sando — Biscoff',
    price: 8.5,
    description:
      'A perfectly toasted Japanese milk bread loaded with smooth biscoff cream, finished with biscoff glaze, and topped with biscoff crumbs.',
    image: '/images/food/dreamy-creamy-biscoff.jpeg',
    category: 'desserts',
    isVegetarian: true,
    spiceLevel: 'mild',
    isFeatured: true,
    featuredTagline: 'The sweet finale',
  },
  {
    id: 'mango-shake',
    name: 'Mango-Ish Shake',
    price: 7.5,
    description:
      'Thick, creamy and bursting with mango goodness! Layered with rich mango glaze, topped with fluffy whipped cream and a generous sprinkle of pistachio crumbles.',
    image: '/images/food/mango-shake.jpeg',
    category: 'drinks',
    isVegetarian: true,
    spiceLevel: 'mild',
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
    spiceLevel: 'mild',
  },
  {
    id: 'pop',
    name: 'Pop',
    price: 2.0,
    description: 'Refreshing canned pop to wash it all down.',
    category: 'drinks',
    isVegetarian: true,
    spiceLevel: 'mild',
  },
  {
    id: 'water',
    name: 'Water',
    price: 2.0,
    description: 'Stay hydrated between bites.',
    category: 'drinks',
    isVegetarian: true,
    spiceLevel: 'mild',
  },
]

export const featuredItems = menuItems.filter((item) => item.isFeatured)

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Priya R.',
    rating: 5,
    text: "Best Indian-fusion burger in the GTA. The Paneer Pioneer changed everything I thought I knew about street food. That Tami Rami sauce is UNREAL.",
    source: 'Google',
  },
  {
    id: '2',
    author: 'Jake M.',
    rating: 5,
    text: "Munchy Crunchy is everything. I came back three days in a row. The brioche bun, the crunch, the sauces — it all hits different.",
    source: 'Google',
  },
  {
    id: '3',
    author: 'Aisha T.',
    rating: 5,
    text: "Came for the burger, stayed for the Dreamy Creamy Sando. The Biscoff one is absolutely dangerous. Where has this been all my life??",
    source: 'Google',
  },
  {
    id: '4',
    author: 'Carlos V.',
    rating: 5,
    text: "Dirty Fries with chicken is a full meal. Don't sleep on the Paneer Popcorn either — it's the best app I've had from a food truck. Period.",
    source: 'Google',
  },
]
