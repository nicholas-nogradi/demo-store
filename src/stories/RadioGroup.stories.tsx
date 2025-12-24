import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '../app/components/ui/radio-group';
import { Label } from '../app/components/ui/label';

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="standard">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="standard" id="std" className="mt-1" />
        <div className="flex-1">
          <Label htmlFor="std" className="font-semibold">Standard</Label>
          <p className="text-sm text-gray-500">Regular pricing option</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="premium" id="prem" className="mt-1" />
        <div className="flex-1">
          <Label htmlFor="prem" className="font-semibold">Premium</Label>
          <p className="text-sm text-gray-500">Enhanced features and support</p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="opt1" />
        <Label htmlFor="opt1">Enabled</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="opt2" disabled />
        <Label htmlFor="opt2" className="cursor-not-allowed opacity-50">Disabled</Label>
      </div>
    </RadioGroup>
  ),
};
