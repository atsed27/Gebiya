import Layout from '@/components/Layout'
import ProdactItem from '@/components/ProdactItem'
import data from '@/utiles/data'

export default function Home() {
  return (
    <Layout >
       <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4' >
         {data.products.map((products)=>(
          <ProdactItem products={products} key={products.slug} />
         ))}
       </div>
    </Layout>
  )
}
