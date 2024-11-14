import React, { Fragment, useState } from 'react';
import { Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { auditLogData } from '@/data';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface AuditLogEntryProps {
  action: string;
  time: Date;
  user: string;
}

export const AuditLog = () => {
  const [filters, setFilters] = useState({
    action: 'all',
    user: 'all',
    date: null as Date | null,
  });

  const { action, user, date } = filters;

  const uniqueActions = [...new Set(auditLogData.map((entry) => entry.action))];
  const uniqueUsers = [...new Set(auditLogData.map((entry) => entry.user))];

  const filteredData = auditLogData.filter((entry) => {
    return (
      (action === 'all' || entry.action === action) &&
      (user === 'all' || entry.user === user) &&
      (!date || entry.time.toDateString() === date.toDateString())
    );
  });

  const handleFilterChange = (key: string, value: string | Date | null) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-lg font-bold">Audit Logs</h2>
        <p className="text-sm text-gray-500">View all account activity.</p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <Select
            onValueChange={(value) => handleFilterChange('action', value)}
          >
            <SelectTrigger className="border border-gray-300 rounded-md p-2 w-full sm:w-32">
              <SelectValue placeholder="Events" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Events</SelectItem>
              {uniqueActions.map((action) => (
                <SelectItem key={action} value={action}>
                  {action}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilterChange('user', value)}>
            <SelectTrigger className="border border-gray-300 rounded-md p-2 w-full sm:w-32">
              <SelectValue placeholder="Users" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Users</SelectItem>
              {uniqueUsers.map((user) => (
                <SelectItem key={user} value={user}>
                  {user}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <input
            type="date"
            className="border border-gray-300 rounded-md p-2 w-full sm:w-32 h-9"
            onChange={(e) =>
              handleFilterChange(
                'date',
                e.target.value ? new Date(e.target.value) : null,
              )
            }
          />
        </div>
      </div>

      <div className="space-y-1">
        {filteredData.map((entry, index) => (
          <Fragment key={index}>
            <AuditLogEntry
              action={entry.action}
              time={entry.time}
              user={entry.user}
            />
            {index < filteredData.length - 1 && <Separator />}
          </Fragment>
        ))}
        {filteredData.length === 0 && (
          <p className="text-sm text-gray-500">No entries match the filters.</p>
        )}
      </div>
    </div>
  );
};

const AuditLogEntry = ({ action, time, user }: AuditLogEntryProps) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-4">
      <Shield className="w-4 h-4 text-gray-500" />
      <div>
        <p className="text-sm font-medium">{action}</p>
        <p className="text-sm text-gray-500">{user}</p>
      </div>
    </div>
    <span className="text-sm text-gray-500 ml-4">{time.toDateString()}</span>
  </div>
);
