import React, { useState } from 'react';
import ReusableTable from '../../components/TableColumn';

type Member = {
  name: string;
  email: string;
  role: string;
  status: string;
};

const MembersTable: React.FC = () => {
  const [members] = useState<Member[]>([
    {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Member',
      status: 'Inactive',
    },
  ]);

  const columns = [
    { label: 'Name', accessor: 'name' },
    { label: 'Email', accessor: 'email' },
    { label: 'Role', accessor: 'role' },
    { label: 'Status', accessor: 'status' },
  ];

  const renderActions = () => (
    <div>
      <button
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Edit
      </button>
      <button
        className="ml-4 font-medium text-red-600 dark:text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );

  return (
    <div>
      {/* Members Table */}
      <ReusableTable
        columns={columns}
        data={members.map((member) => ({
          name: member.name,
          email: member.email,
          role: member.role,
          status: member.status,
        }))}
        renderActions={renderActions}
      />
    </div>
  );
};

export default MembersTable;
