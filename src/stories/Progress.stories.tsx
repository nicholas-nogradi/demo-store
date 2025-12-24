import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../app/components/ui/progress';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100 },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 35,
  },
};

export const Half: Story = {
  args: {
    value: 50,
  },
};

export const ThreeQuarters: Story = {
  args: {
    value: 75,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <label className="text-sm font-medium">Download Progress</label>
        <Progress value={25} className="mt-2" />
      </div>
      <div>
        <label className="text-sm font-medium">Upload Progress</label>
        <Progress value={50} className="mt-2" />
      </div>
      <div>
        <label className="text-sm font-medium">Processing</label>
        <Progress value={75} className="mt-2" />
      </div>
      <div>
        <label className="text-sm font-medium">Complete</label>
        <Progress value={100} className="mt-2" />
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Loading</span>
        <span className="text-gray-500">65%</span>
      </div>
      <Progress value={65} />
    </div>
  ),
};
