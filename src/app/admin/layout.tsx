import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <nav className="flex space-x-4">
            <Link href="/admin" className="text-gray-600 hover:text-gray-900 font-medium">Dashboard</Link>
            <Link href="/admin/resumes" className="text-gray-600 hover:text-gray-900 font-medium">Resumes</Link>
            <Link href="/admin/jobs" className="text-gray-600 hover:text-gray-900 font-medium">Job Approvals</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
