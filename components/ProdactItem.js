/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function ProdactItem({products}) {
  return (
    <div className='card'>
        <Link href={`/products/${products.slug}`}>
            <img src={products.image} alt={products.name} className='rounded shadow'/>
        </Link>
        <div className='flex flex-col items-center justify-center p-5'>
            <Link href={`/products/${products.slug}`}>
                <h2 className='text-lg'>{products.name}</h2>
            </Link>
            <p className='mb-2'>{products.brand}</p>
            <p>${products.price}</p>
            <button className='primary-button' type='button'>Add to cart
            </button>
        </div>
    </div>
  )
}

export default ProdactItem