import { Bell, FileText, Github, User, X } from 'lucide-react';


export const SidebarData = {
  nav: [
    { name: 'Connected Account', icon: User },
    { name: 'Notifications', icon: Bell },
    { name: 'Audit Logs', icon: FileText },
    { name: 'My Account', icon: User },
  ],
};

export interface AuditLogEntryData {
  action: string;
  time: Date;
  user: string;
}

export const auditLogData: AuditLogEntryData[] = [
  {
    action: "Password changed",
    time: new Date(2022, 10, 5, 23, 23),
    user: "claude@example.com",
  },
  {
    action: "Login from new device",
    time: new Date(2022, 10, 4, 15, 45),
    user: "claude@example.com",
  },
  {
    action: "Email updated",
    time: new Date(2022, 10, 2, 9, 30),
    user: "Daniel@example.com",
  },
  {
    action: "Name updated",
    time: new Date(2022, 10, 2, 9, 30),
    user: "Daniel@example.com",
  },
]


export interface connectedAccountsEntryData {
  key: string,
  name: string,
  description: string,
  icon: typeof Github | typeof X,
}

export const connectedAccountsData: connectedAccountsEntryData[]= [
  {
    key: 'github',
    name: 'GitHub',
    description: 'Connect your GitHub account',
    icon: Github,
  },
  {
    key: 'twitter',
    name: 'Twitter',
    description: 'Connect your Twitter account',
    icon: X,
  },
];

export interface notificationCenterEntryData {
  key: 'email' | 'push' | 'weekly',
  title: string,
  description: string,
}


export const notificationCenterData: notificationCenterEntryData[] = [
  {
    key: 'email',
    title: 'Email notifications',
    description: 'Receive notifications via email',
  },
  {
    key: 'push',
    title: 'Push notifications',
    description: 'Receive push notifications in browser',
  },
  {
    key: 'weekly',
    title: 'Weekly digest',
    description: 'Get weekly summary of activity',
  },
]