import React from "react";
import Sidebar from "./components/Sidebar";
import ProductForm from "./components/ProductForm";
import PreviewPanel from "./components/PreviewPanel";
import Navbar from "./components/Navigation";

export default function App() {
  return (
    <div className="h-[100%] bg-gray-50">
      <Navbar />

      <div className="pt-16 max-w-[1920px] mx-auto grid grid-cols-[3.6fr_5.4fr_3fr] gap-[16px]">
        
        {/* Fixed Sidebar */}
        <aside >
          <Sidebar />
        </aside>

        {/* Scrollable Center */}
        <main >
          <ProductForm />
        </main>

        {/* Fixed Preview Panel */}
        <aside>
          <PreviewPanel />
        </aside>
      </div>
    </div>
  );
}
