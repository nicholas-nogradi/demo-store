import type { Meta, StoryObj } from '@storybook/react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../app/components/ui/sheet';
import { Button } from '../app/components/ui/button';

const meta = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a description of the sheet content
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p>Sheet content goes here</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const FromLeft: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the left
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p>Content from the left</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const FromTop: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the top
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p>Content from the top</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const FromBottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the bottom
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p>Content from the bottom</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit Profile</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-4 py-6">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input type="text" placeholder="Your name" className="w-full border rounded px-3 py-2 mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" placeholder="your@email.com" className="w-full border rounded px-3 py-2 mt-1" />
          </div>
          <Button className="w-full">Save changes</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};
