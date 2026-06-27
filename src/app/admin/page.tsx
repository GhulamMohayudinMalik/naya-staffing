'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  // In a real app, we would verify the admin token here
  // and fetch dashboard stats from the backend.
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Pending Jobs</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">--</p>
          <Link href="/admin/jobs" className="text-blue-600 text-sm hover:underline mt-4 inline-block">Review Jobs &rarr;</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Resumes</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">--</p>
          <Link href="/admin/resumes" className="text-blue-600 text-sm hover:underline mt-4 inline-block">Search Resumes &rarr;</Link>
        </div>

      </div>
    </div>
  );
}
