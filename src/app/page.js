'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Page() {
  const [category, setCategory] = useState("All");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  return(
    <div className="p-5 bg-blue-50">
      <header>
        <Navbar />
      </header>
      <main className="flex mt-5">
        <Sidebar category={category} onCategoryChange={setCategory} minValue={minValue} maxValue={maxValue} onMinValueChange={setMinValue} onMaxValueChange={setMaxValue}/>
        <ProductList category={category} minValue={minValue} maxValue={maxValue}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}