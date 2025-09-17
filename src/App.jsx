import React from "react";
import Sidebar from "./components/Sidebar";
import ProductForm from "./components/ProductForm";
import PreviewPanel from "./components/PreviewPanel";
import Navbar from "./components/Navigation";

export default function App() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-white shadow">
        <Navbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[540px] bg-white shadow flex-shrink-0 overflow-y-auto hide-scrollbar max-1440:w-[440px] max-1280:w-[350px] max-768:hidden">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto px-6 py-0 hide-scrollbar max-768:px-0">
          <ProductForm />
        </main>

        <aside className="w-[450px] bg-white shadow flex-shrink-0 overflow-y-auto hide-scrollbar max-1440:w-[350px] max-1280:hidden">
          <PreviewPanel />
        </aside>
      </div>
    </div>
  );
}
