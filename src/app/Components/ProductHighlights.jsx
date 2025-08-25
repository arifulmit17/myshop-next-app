
import Link from "next/link";
async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, { cache: "no-store" });
  return res.json();
}
export default async function ProductHighlights() {
  const products = await getProducts();
  return (
    <section className="py-16 bg-base-100">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">Product Highlights</h2>
        <p className="text-base-content/70">Explore our featured picks</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        {products.slice(0, 3).map((product) => (
          <div
            key={product._id}
            className="card bg-base-200 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <figure className="h-64">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body text-base-content text-center">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-base-content/70">{product.description}</p>
              <p className="font-bold">${product.price}</p>
              <Link href={`/products/${product._id}`}>
                <button className="btn btn-primary mt-2">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
