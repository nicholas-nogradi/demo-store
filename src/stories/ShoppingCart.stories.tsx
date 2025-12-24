import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingCart } from '../app/components/ShoppingCart';
import type { CartItem } from '../types';

const meta = {
  title: 'Components/ShoppingCart',
  component: ShoppingCart,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShoppingCart>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCartItems: CartItem[] = [
  {
    product: {
      id: '1',
      name: 'Visual Testing Tool Pro',
      description: 'Professional visual testing',
      price: 99.99,
      image: 'https://via.placeholder.com/100x100?text=Tool+1',
      category: 'testing-tools',
      inStock: true,
    },
    quantity: 2,
  },
  {
    product: {
      id: '2',
      name: 'Component Library',
      description: 'UI components',
      price: 49.99,
      image: 'https://via.placeholder.com/100x100?text=Library',
      category: 'component-libraries',
      inStock: true,
    },
    quantity: 1,
  },
];

export const Empty: Story = {
  args: {
    items: [],
    isOpen: true,
    onClose: () => console.log('Cart closed'),
    onUpdateQuantity: (id, qty) => console.log('Quantity updated:', id, qty),
    onRemoveItem: (id) => console.log('Item removed:', id),
  },
};

export const WithItems: Story = {
  args: {
    items: mockCartItems,
    isOpen: true,
    onClose: () => console.log('Cart closed'),
    onUpdateQuantity: (id, qty) => console.log('Quantity updated:', id, qty),
    onRemoveItem: (id) => console.log('Item removed:', id),
  },
};

export const SingleItem: Story = {
  args: {
    items: [mockCartItems[0]],
    isOpen: true,
    onClose: () => console.log('Cart closed'),
    onUpdateQuantity: (id, qty) => console.log('Quantity updated:', id, qty),
    onRemoveItem: (id) => console.log('Item removed:', id),
  },
};

export const Closed: Story = {
  args: {
    items: mockCartItems,
    isOpen: false,
    onClose: () => console.log('Cart closed'),
    onUpdateQuantity: (id, qty) => console.log('Quantity updated:', id, qty),
    onRemoveItem: (id) => console.log('Item removed:', id),
  },
};
