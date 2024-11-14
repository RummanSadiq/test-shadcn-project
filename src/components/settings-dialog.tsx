'use client';

import * as React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AuditLog } from './settings/AuditLog';
import { AccountSettings } from './settings/AccountSettings';
import { NotificationSettings } from './settings/NotificationSettings';
import { useState } from 'react';
import { ConnectedAccounts } from './settings/ConnectedAccounts';
import { SidebarData } from '@/data';

export function SettingsDialog() {
  const [open, setOpen] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState<string>('Notifications');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
  });
  const [connectedAccounts, setConnectedAccounts] = useState({
    github: false,
    twitter: false,
  });

  const handleTabChange = (name: string) => {
    setActiveTab(name);
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountSettings />;
      case 'Notifications':
        return (
          <NotificationSettings
            notifications={notifications}
            setNotifications={setNotifications}
          />
        );
      case 'Connected Account':
        return (
          <ConnectedAccounts
            connectedAccounts={connectedAccounts}
            setConnectedAccounts={setConnectedAccounts}
          />
        );
      case 'Audit Logs':
        return <AuditLog />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Open Sidebar Dialog</Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 md:max-h-[600px] md:max-w-[900px] lg:max-w-[1000px]">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar className="hidden md:flex">
            <SidebarContent className="py-2">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {SidebarData.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.name === activeTab}
                          onClick={() => handleTabChange(item.name)}
                        >
                          <a href="#">
                            <item.icon />
                            <span>{item.name}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex h-[550px] flex-1 flex-col overflow-hidden">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <SidebarTrigger className="-ml-1" />
              <div className="flex items-center gap-2 px-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{activeTab}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
              {renderActiveTabContent()}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}
