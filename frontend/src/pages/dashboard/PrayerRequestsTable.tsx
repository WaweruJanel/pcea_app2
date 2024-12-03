import React, { useState } from 'react';
import ReusableTable from '../../components/TableColumn';

type PrayerRequest = {
  name: string;
  request: string;
  date: string;
  status: string;
};

const PrayerRequestsTable: React.FC = () => {
  const [prayerRequests] = useState<PrayerRequest[]>([
    {
      name: 'Alice Johnson',
      request: 'Pray for healing',
      date: '2024-12-01',
      status: 'Pending',
    },
    {
      name: 'Bob Williams',
      request: 'Pray for job success',
      date: '2024-12-02',
      status: 'Resolved',
    },
  ]);

  const columns = [
    { label: 'Name', accessor: 'name' },
    { label: 'Prayer Request', accessor: 'request' },
    { label: 'Date', accessor: 'date' },
    { label: 'Status', accessor: 'status' },
  ];

  const renderActions = (
  ) => (
    <div>
      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        View
      </button>
      <button
        className="ml-4 font-medium text-green-600 dark:text-green-500 hover:underline"
      >
        Mark as Resolved
      </button>
    </div>
  );


  return (
    <div>
      {/* Prayer Requests Table */}
      <ReusableTable
        columns={columns}
        data={prayerRequests.map((request) => ({
          name: request.name,
          request: request.request,
          date: request.date,
          status: request.status,
        }))}
        renderActions={renderActions}
      />
    </div>
  );
};

export default PrayerRequestsTable;
