import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '../app/components/ui/separator';

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <p>Above separator</p>
      <Separator className="my-4" />
      <p>Below separator</p>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <p>Section 1</p>
      <Separator />
      <p>Section 2</p>
      <Separator />
      <p>Section 3</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex gap-4 h-20 items-center">
      <p>Left</p>
      <Separator orientation="vertical" />
      <p>Right</p>
    </div>
  ),
};

export const WithMargin: Story = {
  render: () => (
    <div className="w-96">
      <p>Content with custom margin</p>
      <Separator className="my-8" />
      <p>More content</p>
    </div>
  ),
};
