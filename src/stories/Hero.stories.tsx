import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '../app/components/Hero';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onShopNow: () => console.log('Shop Now clicked'),
  },
};

export const Mobile: Story = {
  args: {
    onShopNow: () => console.log('Shop Now clicked'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  args: {
    onShopNow: () => console.log('Shop Now clicked'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
