import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { connectedAccountsData } from '@/data';

interface ConnectedAccountsProps {
  connectedAccounts: {
    github: boolean;
    twitter: boolean;
  };
  setConnectedAccounts: React.Dispatch<
    React.SetStateAction<{
      github: boolean;
      twitter: boolean;
    }>
  >;
}

export const ConnectedAccounts: React.FC<ConnectedAccountsProps> = ({
  connectedAccounts,
  setConnectedAccounts,
}) => {
  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-lg font-bold">Connected Accounts</h2>
        <p className="text-sm text-gray-500">
          Manage your connected external accounts.
        </p>
      </div>
      <div className="space-y-4">
        {connectedAccountsData.map((account, index) => (
          <div key={account.key}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <account.icon className="w-6 h-6" />
                <div className="space-y-0.5">
                  <Label>{account.name}</Label>
                  <p className="text-sm text-gray-500">{account.description}</p>
                </div>
              </div>
              <Button
                variant={
                  connectedAccounts[
                    account.key as keyof typeof connectedAccounts
                  ]
                    ? 'destructive'
                    : 'secondary'
                }
                onClick={() =>
                  setConnectedAccounts((prev) => ({
                    ...prev,
                    [account.key]:
                      !prev[account.key as keyof typeof connectedAccounts],
                  }))
                }
              >
                {connectedAccounts[
                  account.key as keyof typeof connectedAccounts
                ]
                  ? 'Disconnect'
                  : 'Connect'}
              </Button>
            </div>
            {index < connectedAccountsData.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </div>
  );
};
