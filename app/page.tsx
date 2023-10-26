import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>

      <section className="px-6  md:px-20 py-24 ">

        <div className="flex max-xl:flex-col gap-16">

          <div className="flex flex-col justify-center">

            <p className="small-text">
              Comprar de maneira inteligente começa aqui:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt='seta para direita'
                width={16}
                height={16}

              />
            </p>

            <h1 className='head-text'>
              Liberte o poder do <br />
              <span className="text-red-400">PreçoSábio</span>
            </h1>

            <p className="mt-6">
              Acompanhe preços de produtos e encontre as melhores ofertas. Compre conscientemente e economize enquanto faz compras!
            </p>

            <Searchbar />
          </div>


          <HeroCarousel />


        </div>

      </section>


      <div className="trending-section">
        <h2 className="section-text">Trending!</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Apple Iphone 15', 'Book', 'Sneakers'].map((product) => (
            <div className="">{product}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home