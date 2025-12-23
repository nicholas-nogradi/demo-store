import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from '../app/components/ui/sidebar';
import { Home, Settings, User } from 'lucide-react';

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-lg font-semibold">Menu</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4">
          <SidebarTrigger />
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p className="text-gray-600">This is the main content area</p>
        </div>
      </div>
    </div>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <div className="flex h-screen">
      <Sidebar className="w-16">
        <SidebarHeader className="h-16 flex items-center justify-center">
          <span className="text-xl font-bold">M</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="h-4 w-4" />
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User className="h-4 w-4" />
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings className="h-4 w-4" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4">
          <SidebarTrigger />
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Main Content</h1>
        </div>
      </div>
    </div>
  ),
};

export const ExpandedMenu: Story = {
  render: () => (
    <div className="flex h-screen">
      <Sidebar className="w-64">
        <SidebarHeader className="border-b p-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </SidebarHeader>
        <SidebarContent className="p-4">
          <SidebarMenu className="space-y-2">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-100">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-100">
                  <User className="h-5 w-5" />
                  <span>Users</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-100">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4">
          <SidebarTrigger />
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </div>
    </div>
  ),
};
