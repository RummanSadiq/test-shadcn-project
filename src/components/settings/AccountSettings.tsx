import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AccountSettings = () => {
  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-lg font-bold">Profile</h2>
        <p className="text-sm text-gray-500">
          Update your personal information and profile image.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/api/placeholder/32/32" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button variant="outline">Change avatar</Button>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            defaultValue="Claude Newman"
            className="w-full lg:w-72"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            defaultValue="claude@example.com"
            className="w-full lg:w-72"
          />
        </div>
      </div>
    </div>
  );
};
