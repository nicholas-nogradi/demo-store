import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../app/components/ui/toggle';
import { Bold, Italic as ItalicIcon, Underline as UnderlineIcon } from 'lucide-react';

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};

export const WithIcon: Story = {
  args: {
    children: <Bold className="h-4 w-4" />,
  },
};

export const ItalicStory: Story = {
  args: {
    children: <ItalicIcon className="h-4 w-4" />,
  },
};

export const UnderlineStory: Story = {
  args: {
    children: <UnderlineIcon className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex gap-1">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <ItalicIcon className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <UnderlineIcon className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};
