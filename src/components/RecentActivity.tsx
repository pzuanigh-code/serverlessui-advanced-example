import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import type { DashboardFieldsFragment } from 'src/types/generated/graphql-hooks';
import OrderRow from './order/OrderRow';

interface RecentActivityProps {
  loading: boolean;
  orders?: DashboardFieldsFragment[];
}

const RecentActivity = ({ orders, loading }: RecentActivityProps) => (
  <div className="mt-8">
    <h2 className="max-w-6xl px-4 mx-auto mt-8 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
      Recent activity
    </h2>
    {loading && (
      <div className="flex justify-center max-w-6xl mx-auto mt-8">
        <ClipLoader />
      </div>
    )}
    {!loading && (
      <div className="hidden sm:block">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col mt-2">
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                      Order
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                      Amount
                    </th>
                    <th className="hidden px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50 md:block">
                      Status
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders?.map((order) => (
                    <OrderRow key={order.id} order={order} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default RecentActivity;
