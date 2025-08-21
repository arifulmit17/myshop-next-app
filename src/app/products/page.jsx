import React from 'react'
import { products } from '@/lib/products'
import Link from 'next/link'
export default function Productspage() {

  return (
    <div >
        <div className='grid grid-cols-4 gap-5'>
            {products.map((p) => (
          <div key={p.id} className="flex flex-col items-center p-6 bg-base-200 rounded-xl shadow">
            <img className='w-[200px] h-[150px] rounded-2xl' src={p.image} alt="" />
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-bold">${p.price}</p>
            <Link href={`/products/${p.id}`} className="btn btn-sm btn-secondary mt-2">
              Details
            </Link>
          </div>
        ))}

        </div>
        
    </div>
  )
}
