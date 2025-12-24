import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProductDetail } from '../app/components/ProductDetail';
import type { Product } from '../types';

const meta = {
  title: 'Components/ProductDetail',
  component: ProductDetail,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProduct: Product = {
  id: '1',
  name: 'Visual Testing Tool Pro',
  description: 'Professional visual testing and regression detection for modern web applications. Comprehensive screenshot comparison, visual diffs, and automated testing capabilities.',
  price: 99.99,
  image: 'https://via.placeholder.com/400x400?text=Testing+Tool',
  category: 'testing-tools',
  inStock: true,
  featured: true,
  rating: 4.5,
  reviewCount: 128,
};

const ProductDetailWrapper = (props: any) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  return (
    <ProductDetail
      {...props}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
};

export const Default: Story = {
  args: {
    product: mockProduct,
    isOpen: true,
    onClose: () => console.log('Closed'),
    onAddToCart: (product) => console.log('Added to cart:', product),
  },
  render: (args) => <ProductDetailWrapper {...args} />,
};

export const OutOfStock: Story = {
  args: {
    product: {
      ...mockProduct,
      inStock: false,
    },
    isOpen: true,
    onClose: () => console.log('Closed'),
    onAddToCart: (product) => console.log('Added to cart:', product),
  },
  render: (args) => <ProductDetailWrapper {...args} />,
};

export const NoRating: Story = {
  args: {
    product: {
      ...mockProduct,
      rating: undefined,
      reviewCount: undefined,
    },
    isOpen: true,
    onClose: () => console.log('Closed'),
    onAddToCart: (product) => console.log('Added to cart:', product),
  },
  render: (args) => <ProductDetailWrapper {...args} />,
};

export const Closed: Story = {
  args: {
    product: mockProduct,
    isOpen: false,
    onClose: () => console.log('Closed'),
    onAddToCart: (product) => console.log('Added to cart:', product),
  },
};
