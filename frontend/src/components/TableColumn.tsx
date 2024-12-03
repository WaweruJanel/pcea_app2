import React from 'react';

type TableColumn = {
  label: string;
  accessor: string;
};

type TableRow = {
  [key: string]: string | React.ReactNode;
};

type ReusableTableProps = {
  columns: TableColumn[];
  data: TableRow[];
  renderActions: (row: TableRow) => React.ReactNode;
};

const ReusableTable: React.FC<ReusableTableProps> = ({ columns, data, renderActions }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} scope="col" className="px-6 py-3">
                {col.label}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}
            >
              {columns.map((col, idx) => (
                <td key={idx} className="px-6 py-4">
                  {row[col.accessor]}
                </td>
              ))}
              <td className="px-6 py-4">{renderActions(row)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
