import type { Meta, StoryObj } from '@storybook/react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../app/components/ui/resizable';

const meta = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="h-96 w-full border rounded-lg">
      <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-blue-50">
        <div className="text-center">
          <p className="font-semibold">Panel 1</p>
          <p className="text-sm text-gray-500">Drag to resize</p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-purple-50">
        <div className="text-center">
          <p className="font-semibold">Panel 2</p>
          <p className="text-sm text-gray-500">Drag to resize</p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup direction="vertical" className="h-96 w-full border rounded-lg">
      <ResizablePanel defaultSize={33} className="flex items-center justify-center bg-green-50">
        <div className="text-center">
          <p className="font-semibold">Panel 1</p>
          <p className="text-sm text-gray-500">Drag to resize</p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={67} className="flex items-center justify-center bg-yellow-50">
        <div className="text-center">
          <p className="font-semibold">Panel 2</p>
          <p className="text-sm text-gray-500">Drag to resize</p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="h-96 w-full border rounded-lg">
      <ResizablePanel defaultSize={33} className="flex items-center justify-center bg-red-50">
        <div className="text-center">
          <p className="font-semibold">Panel 1</p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={33} className="flex items-center justify-center bg-blue-50">
        <div className="text-center">
          <p className="font-semibold">Panel 2</p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={34} className="flex items-center justify-center bg-green-50">
        <div className="text-center">
          <p className="font-semibold">Panel 3</p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Nested: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="h-96 w-full border rounded-lg">
      <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-blue-50">
        <div className="text-center">
          <p className="font-semibold">Left Panel</p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical" className="h-full">
          <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-purple-50">
            <div className="text-center">
              <p className="font-semibold">Top Right</p>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-pink-50">
            <div className="text-center">
              <p className="font-semibold">Bottom Right</p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Sidebar: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="h-96 w-full border rounded-lg">
      <ResizablePanel defaultSize={20} minSize={15} className="flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <p className="font-semibold text-sm">Sidebar</p>
          <p className="text-xs text-gray-500">Min: 15%</p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80} className="flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="font-semibold">Main Content</p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
