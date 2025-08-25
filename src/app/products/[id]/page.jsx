async function getProduct(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductDetails({ params }) {
  
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="w-full bg-base-100">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center bg-primary/20 rounded-2xl mx-auto py-10">
        <img className="rounded-2xl w-8/12 mb-10" src={product.image} alt={product.name} />
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="py-4">{product.description}</p>
        <p className="font-bold">Price: ${product.price}</p>
      </div>
    </div>
  );
}
