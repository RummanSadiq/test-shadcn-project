import React, { Dispatch, SetStateAction } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { notificationCenterData } from '@/data';

interface NotificationSettingsProps {
  notifications: {
    email: boolean;
    push: boolean;
    weekly: boolean;
  };
  setNotifications: Dispatch<
    SetStateAction<{
      email: boolean;
      push: boolean;
      weekly: boolean;
    }>
  >;
}

export const NotificationSettings = ({
  notifications,
  setNotifications,
}: NotificationSettingsProps) => {
  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-lg font-bold">Notification Preferences</h2>
        <p className="text-sm text-gray-500">
          Customize how you receive notifications.
        </p>
      </div>
      <div className="space-y-4">
        {notificationCenterData.map(({ key, title, description }) => (
          <div key={key}>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{title}</Label>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
              <Switch
                checked={notifications[key]}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, [key]: checked }))
                }
              />
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
};
