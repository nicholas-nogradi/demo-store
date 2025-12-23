import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../app/components/ui/textarea';
import { Label } from '../app/components/ui/label';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your Message</Label>
      <Textarea placeholder="Type your message here..." id="message" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea...',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a pre-filled textarea with some text content.',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large textarea...',
    rows: 6,
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Small textarea...',
    rows: 2,
  },
};

export const ReadOnly: Story = {
  args: {
    defaultValue: 'This is read-only content',
    readOnly: true,
  },
};
