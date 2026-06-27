'use client';
import { useState } from 'react';

export default function ResumesAdmin() {
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const [workType, setWorkType] = useState('');
  const [results, setResults] = useState([]);

  // Mock search for now, will connect to backend API: /api/v1/admin/resumes/search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: fetch from backend
    alert('Search functionality will query the new Python backend!');
  };

  const handleBulkDownload = () => {
    // TODO: hit backend endpoint /api/v1/admin/resumes/download-bulk
    alert('Will trigger a ZIP download from backend!');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Resume Database</h2>
        <button 
          onClick={handleBulkDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow text-sm font-medium"
        >
          Download All Matching (ZIP)
        </button>
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Engineer"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input 
            type="text" 
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Work Type</label>
          <select 
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Any</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>
        </div>
        <div className="flex items-end">
          <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded shadow">
            Search
          </button>
        </div>
      </form>

      <div className="border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm">No results found (Connect backend to view).</p>
      </div>
    </div>
  );
}
