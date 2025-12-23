import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../app/components/ui/tabs';

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings content</TabsContent>
      <TabsContent value="password">Password settings content</TabsContent>
      <TabsContent value="notifications">Notification settings content</TabsContent>
    </Tabs>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <h3 className="text-lg font-semibold">Overview</h3>
        <p>This is the overview content.</p>
      </TabsContent>
      <TabsContent value="details" className="space-y-4">
        <h3 className="text-lg font-semibold">Details</h3>
        <p>This is the details content.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ProductTabs: Story = {
  render: () => (
    <Tabs defaultValue="description" className="w-96">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specs">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="space-y-2">
        <p className="text-sm">Product description goes here.</p>
      </TabsContent>
      <TabsContent value="specs" className="space-y-2">
        <p className="text-sm">Specifications go here.</p>
      </TabsContent>
      <TabsContent value="reviews" className="space-y-2">
        <p className="text-sm">Customer reviews go here.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-96">
      <TabsList className="grid grid-cols-4">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
      </TabsList>
      {[1, 2, 3, 4].map((num) => (
        <TabsContent key={num} value={`tab${num}`}>
          Tab {num} content
        </TabsContent>
      ))}
    </Tabs>
  ),
};
