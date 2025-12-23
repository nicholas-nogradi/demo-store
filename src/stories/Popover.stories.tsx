import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverContent, PopoverTrigger } from '../app/components/ui/popover';
import { Button } from '../app/components/ui/button';

const meta = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions.</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Settings</h4>
            <p className="text-sm text-muted-foreground">
              Update your settings here.
            </p>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input type="text" className="w-full border rounded px-2 py-1 mt-1" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="w-full border rounded px-2 py-1 mt-1" placeholder="your@email.com" />
            </div>
            <Button className="w-full">Save</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithList: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Select option</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          {['Option 1', 'Option 2', 'Option 3'].map((option) => (
            <button
              key={option}
              className="w-full text-left px-3 py-2 rounded hover:bg-slate-100"
            >
              {option}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Large: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Help</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-4">
          <h3 className="font-semibold">Help & Documentation</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-sm">Getting Started</h4>
              <p className="text-sm text-muted-foreground">Learn the basics and get up and running</p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Advanced Features</h4>
              <p className="text-sm text-muted-foreground">Explore advanced functionality and tips</p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Troubleshooting</h4>
              <p className="text-sm text-muted-foreground">Find solutions to common issues</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const AlignRight: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Align Right</Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Align Right</h4>
          <p className="text-sm text-muted-foreground">
            This popover is aligned to the right.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
