import type { Meta, StoryObj } from '@storybook/react';
import { ProductGrid } from '../app/components/ProductGrid';
import type { Product } from '../types';

const meta = {
  title: 'Components/ProductGrid',
  component: ProductGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Visual Testing Tool Pro',
    description: 'Professional visual testing',
    price: 99.99,
    image: 'https://via.placeholder.com/300x300?text=Tool+1',
    category: 'testing-tools',
    inStock: true,
    featured: true,
    rating: 4.5,
    reviewCount: 128,
  },
  {
    id: '2',
    name: 'Component Library Starter',
    description: 'Ready-to-use UI components',
    price: 49.99,
    image: 'https://via.placeholder.com/300x300?text=Library',
    category: 'component-libraries',
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewCount: 256,
  },
  {
    id: '3',
    name: 'Development Kit Advanced',
    description: 'Complete dev toolkit',
    price: 149.99,
    image: 'https://via.placeholder.com/300x300?text=DevKit',
    category: 'development-kits',
    inStock: true,
    featured: false,
    rating: 4.2,
    reviewCount: 64,
  },
  {
    id: '4',
    name: 'Plugin Collection',
    description: 'Essential plugins bundle',
    price: 29.99,
    image: 'https://via.placeholder.com/300x300?text=Plugins',
    category: 'plugins',
    inStock: false,
    featured: false,
    rating: 4.0,
    reviewCount: 32,
  },
];

export const Default: Story = {
  args: {
    products: mockProducts,
    onAddToCart: (product) => console.log('Added to cart:', product),
    onProductClick: (product) => console.log('Product clicked:', product),
  },
};

export const SingleProduct: Story = {
  args: {
    products: [mockProducts[0]],
    onAddToCart: (product) => console.log('Added to cart:', product),
    onProductClick: (product) => console.log('Product clicked:', product),
  },
};

export const Empty: Story = {
  args: {
    products: [],
    onAddToCart: (product) => console.log('Added to cart:', product),
    onProductClick: (product) => console.log('Product clicked:', product),
  },
};

export const ManyProducts: Story = {
  args: {
    products: Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      name: `Product ${i + 1}`,
      description: 'Product description',
      price: Math.random() * 200,
      image: `https://via.placeholder.com/300x300?text=Product+${i + 1}`,
      category: 'testing-tools' as const,
      inStock: Math.random() > 0.2,
      featured: Math.random() > 0.7,
      rating: Math.floor(Math.random() * 5) + 1,
      reviewCount: Math.floor(Math.random() * 200),
    })),
    onAddToCart: (product) => console.log('Added to cart:', product),
    onProductClick: (product) => console.log('Product clicked:', product),
  },
};
