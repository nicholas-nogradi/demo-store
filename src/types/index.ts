export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  featured?: boolean;
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
}

export type ProductCategory = 
  | 'testing-tools'
  | 'development-kits'
  | 'component-libraries'
  | 'plugins'
  | 'courses'
  | 'merchandise';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export interface FilterState {
  category: ProductCategory | 'all';
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name';
}
