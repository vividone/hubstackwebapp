import React from 'react';

const AdminTable = () => {
  const head = ["NAME", "TOTAL TRANSACTIONS", "REFERRAL LEVEL"];
  const data = [
    { name: "John Doe", totalTransactions: 120, referralLevel: "Level 1" },
    { name: "Jane Smith", totalTransactions: 90, referralLevel: "Level 2" },
    { name: "Sam Green", totalTransactions: 45, referralLevel: "Level 3" },
  ];

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-[#3D30661A] font-semibold text-base sm:text-lg lg:text-xl">
          <tr>
            {head.map((title, index) => (
              <th key={index} className="p-2 sm:p-4 text-center">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody className='font-medium text-base sm:text-lg lg:text-xl text-[#000000]'>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 sm:p-4">{row.name}</td>
                <td className="p-2 sm:p-4">{row.totalTransactions}</td>
                <td className="p-2 sm:p-4">{row.referralLevel}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={head.length} className="p-2 sm:p-4 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
