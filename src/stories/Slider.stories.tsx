import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../app/components/ui/slider';

const meta = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args) => (
    <div className="w-80">
      <Slider {...args} />
    </div>
  ),
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args) => (
    <div className="w-80">
      <Slider {...args} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Volume</label>
        <span className="text-sm text-gray-500">50%</span>
      </div>
      <Slider defaultValue={[50]} min={0} max={100} step={1} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    disabled: true,
  },
  render: (args) => (
    <div className="w-80">
      <Slider {...args} />
    </div>
  ),
};

export const PriceRange: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <label className="text-sm font-medium">Price Range</label>
        <p className="text-sm text-gray-500">$25 - $75</p>
      </div>
      <Slider defaultValue={[25, 75]} min={0} max={100} step={5} />
    </div>
  ),
};
