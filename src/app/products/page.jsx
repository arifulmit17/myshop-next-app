import React from 'react'
// import { products } from '@/lib/products'
import Link from 'next/link'


async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, { cache: "no-store" });
  return res.json();
}

export default async function Productspage() {

  const products = await getProducts();

  return (
    <div >
        <div className='w-11/12 mx-auto grid bg-base-100 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {products.map((p) => ( 
          <div key={p._id} className="flex text-base-content flex-col items-center p-6 bg-primary/20 rounded-xl shadow">
            <img className='w-[200px] h-[150px] rounded-2xl' src={p.image} alt="" />
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-bold">${p.price}</p>
            <Link href={`/products/${p._id}`} className="btn btn-sm btn-primary mt-2">
              Details
            </Link>
          </div>
        ))}

        </div>
        
    </div>
  )
}
