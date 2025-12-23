import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '../app/components/ui/scroll-area';

const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const longText = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`).join('\n');

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border p-4">
      <div className="space-y-2">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="flex h-80 w-80 shrink-0 items-center justify-center rounded-md bg-slate-100"
          >
            <span className="text-xl font-semibold">Item {i + 1}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const List: Story = {
  render: () => (
    <ScrollArea className="h-72 w-80 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Tags</h4>
        <div className="space-y-2">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="rounded px-2 py-1 text-sm hover:bg-slate-100 cursor-pointer"
            >
              Tag {i + 1}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

export const Table: Story = {
  render: () => (
    <ScrollArea className="h-72 w-80 rounded-md border">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 50 }).map((_, i) => (
            <tr key={i} className="border-b">
              <td className="p-2 text-sm">User {i + 1}</td>
              <td className="p-2 text-sm">{i % 2 === 0 ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  ),
};

export const Mixed: Story = {
  render: () => (
    <div className="flex gap-4">
      <ScrollArea className="h-72 w-48 rounded-md border p-4">
        <h4 className="mb-2 text-sm font-medium">Vertical Scroll</h4>
        <div className="space-y-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="text-sm">
              Item {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
      <ScrollArea className="w-96 h-72 whitespace-nowrap rounded-md border p-4">
        <h4 className="mb-2 text-sm font-medium">Horizontal Scroll</h4>
        <div className="flex w-max space-x-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-40 w-40 shrink-0 rounded-md bg-slate-100 flex items-center justify-center">
              Card {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};
