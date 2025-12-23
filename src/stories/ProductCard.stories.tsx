import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '../app/components/ProductCard';
import type { Product } from '../types';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProduct: Product = {
  id: '1',
  name: 'Visual Testing Tool Pro',
  description: 'Professional visual testing and regression detection',
  price: 99.99,
  image: 'https://via.placeholder.com/300x300?text=Testing+Tool',
  category: 'testing-tools',
  inStock: true,
  featured: false,
  rating: 4.5,
  reviewCount: 128,
};

export const Default: Story = {
  args: {
    product: defaultProduct,
    onAddToCart: (product) => console.log('Added to cart:', product),
    onProductClick: (product) => console.log('Product clicked:', product),
  },
};

export const Featured: Story = {
  args: {
    product: {
      ...defaultProduct,
      featured: true,
    },
    onAddToCart: (product) => console.log('Added to cart:', product),
    onProductClick: (product) => console.log('Product clicked:', product),
  },
};

export const OutOfStock: Story = {
  args: {
    product: {
      ...defaultProduct,
      inStock: false,
    },
    onAddToCart: (product) => console.log('Added to cart:', product),
    onProductClick: (product) => console.log('Product clicked:', product),
  },
};

export const NoRating: Story = {
  args: {
    product: {
      ...defaultProduct,
      rating: undefined,
      reviewCount: undefined,
    },
    onAddToCart: (product) => console.log('Added to cart:', product),
    onProductClick: (product) => console.log('Product clicked:', product),
  },
};

export const HighRating: Story = {
  args: {
    product: {
      ...defaultProduct,
      rating: 5,
      reviewCount: 256,
    },
    onAddToCart: (product) => console.log('Added to cart:', product),
    onProductClick: (product) => console.log('Product clicked:', product),
  },
};
