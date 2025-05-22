import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  return(
    <div className="p-5 bg-blue-50">
      <header>
        <Navbar />
      </header>
      <main className="flex mt-5">
        <Sidebar />
        <ProductList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}