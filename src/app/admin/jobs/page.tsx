'use client';
import { useState } from 'react';

export default function JobsAdmin() {
  const [pendingJobs, setPendingJobs] = useState([]);

  const handleApprove = (id: number) => {
    // TODO: call backend to approve
    alert(`Will approve job ID ${id} via backend API`);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Job Approvals</h2>
        <p className="text-gray-500 text-sm mt-1">Review and approve jobs posted by clients.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posted Date</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Mock empty state */}
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                No pending jobs at the moment (Connect backend to view).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
