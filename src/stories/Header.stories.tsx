import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../app/components/Header';
import type { CartState } from '../types';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  cart: {
    items: [],
    isOpen: false,
  } as CartState,
  onCartToggle: () => console.log('Cart toggled'),
  onCategoryChange: (category: any) => console.log('Category changed:', category),
  onSearchChange: (query: string) => console.log('Search changed:', query),
  selectedCategory: 'all' as const,
};

export const Default: Story = {
  args: defaultProps,
};

export const WithCartItems: Story = {
  args: {
    ...defaultProps,
    cart: {
      items: [
        {
          product: {
            id: '1',
            name: 'Test Product',
            description: 'A test product',
            price: 29.99,
            image: 'https://via.placeholder.com/200',
            category: 'testing-tools',
            inStock: true,
          },
          quantity: 2,
        },
        {
          product: {
            id: '2',
            name: 'Another Product',
            description: 'Another product',
            price: 49.99,
            image: 'https://via.placeholder.com/200',
            category: 'plugins',
            inStock: true,
          },
          quantity: 1,
        },
      ],
      isOpen: false,
    },
  },
};

export const CategorySelected: Story = {
  args: {
    ...defaultProps,
    selectedCategory: 'testing-tools',
  },
};

export const CartOpen: Story = {
  args: {
    ...defaultProps,
    cart: {
      items: [],
      isOpen: true,
    },
  },
};
