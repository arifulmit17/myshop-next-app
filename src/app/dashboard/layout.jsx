import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-md p-5 flex flex-col">
        <h2 className="text-2xl font-bold text-secondary mb-6">My Dashboard</h2>
        <nav className="flex flex-col text-base-content gap-3">
          <Link href="/dashboard" className="hover:text-secondary">🏠 Overview</Link>
          <Link href="/dashboard/add-product" className="hover:text-secondary">➕ Add Product</Link>
          
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between text-base-content items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
         
        </header>

        <section>{children}</section>
      </main>
    </div>
  );
}

