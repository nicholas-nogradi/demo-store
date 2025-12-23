import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../app/components/Footer';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DarkBackground: Story = {
  render: () => (
    <div className="bg-gray-900">
      <Footer />
    </div>
  ),
};
