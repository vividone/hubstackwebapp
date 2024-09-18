"use client";

const UnitsHistory = () => {

  return (
    <div className="flex flex-1 flex-wrap relative h-full ">

        <div className="flex-1">
          <h2 className="font-medium 2xl:text-[25px] text-[20px] pt-[40px] pb-4">Transactions</h2>
          
          <div className="w-full py-2 overflow-x-auto">
            <table className="table-auto text-left w-full min-w-[500px]">
                      <thead>
                          <tr className="bg-[#3D3066]/[0.1]">
                              <th className="p-[20px]">Date</th>
                              <th className="p-[20px]">Amount</th>
                              <th className="p-[20px]">Status</th>
                          </tr>
                      </thead>
                      <tbody className="">

                      </tbody>
            </table>
          </div>

        </div>
    </div>
  );
};

export default UnitsHistory;
