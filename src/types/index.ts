export type MenuCategory =
  | 'veg-burgers'
  | 'nonveg-burgers'
  | 'sides'
  | 'desserts'
  | 'drinks'

export interface MenuItem {
  id: string
  name: string
  price: number
  description: string
  image?: string
  category: MenuCategory
  isVegetarian: boolean | 'both'
  isFeatured?: boolean
  featuredTagline?: string
}

export interface MenuCategoryMeta {
  id: MenuCategory
  label: string
  emoji: string
}

export interface Review {
  id: string
  author: string
  rating: number
  text: string
  source: string
}

export interface FloatingElement {
  emoji: string
  className: string
  style: React.CSSProperties
}
