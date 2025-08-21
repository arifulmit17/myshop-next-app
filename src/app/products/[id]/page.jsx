import { products } from "@/lib/products";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="w-full ">
        <div className="w-1/5 flex flex-col items-center bg-blue-200 rounded-2xl mx-auto py-10">
        <img className="rounded-2xl" src={product.image} alt="" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="py-4">{product.description}</p>
      <p className="font-bold">Price: ${product.price}</p>
    </div>

    </div>
    
  );
}

