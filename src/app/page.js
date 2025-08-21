import Image from "next/image";
import Link from "next/link";
import ProductHighlights from "./Components/ProductHighlights";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero min-h-[70vh] bg-[url('https://res.cloudinary.com/dfhlm4cyw/image/upload/v1755779956/office-workplace-with-laptop-smartphone_146671-13978_oywnyx.avif')] bg-cover bg-center">
  <div className="hero-overlay bg-black/40"></div>
  <div className="hero-content text-center text-white">
    <div>
      <h1 className="text-4xl font-bold">Welcome to My-Shop</h1>
      <p className="py-4">Explore amazing tech products easily.</p>
      <Link href="/products" className="btn btn-primary">Shop Now</Link>
    </div>
  </div>
</section>


      {/* Highlights */}
<ProductHighlights></ProductHighlights>

    </div>
  );
}
