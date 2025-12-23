import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../app/components/ui/input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter email...',
    type: 'email',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password...',
    type: 'password',
  },
};

export const Number: Story = {
  args: {
    placeholder: 'Enter number...',
    type: 'number',
  },
};

export const Search: Story = {
  args: {
    placeholder: 'Search products...',
    type: 'search',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input...',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'With initial value',
    defaultValue: 'Example value',
  },
};
