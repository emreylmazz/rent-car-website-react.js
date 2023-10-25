'use client'

// image 
import Image from "next/image"

// framer
import {motion} from 'framer-motion'

// variants
import { fadeIn } from "../variants"


const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div className="container mx-auto"
       variants={fadeIn('up', 0.4)} 
       initial="hidden" 
       whileInView={"show"}
       viewport={{once:false, amount:0.6}}
      >
        {/* brand wrapper */}
      <div className="grid grid-cols-3 gap6 place-items-center xl:flex 
      xl:flex-wrap xl:gap-x-6 xl:justify-between">
        <div>
          <Image
          src={'/public/assets/assets/icons/brands/ford.jpg'}
          width={85}
          height={32}
          alt=""
          />
        </div>
        <div>
          <Image
          src={'/public/assets/assets/icons/brands/mercedes.jpg'}
          width={60}
          height={60}
          alt=""
          />
        </div>
        <div>
          <Image
          src={'/public/assets/assets/icons/brands/audi.jpg'}
          width={85}
          height={50}
          alt=""
          />
        </div>
        <div>
          <Image
          src={'/public/assets/assets/icons/brands/bmw.jpg'}
          width={60}
          height={60}
          alt=""
          />
        </div>
        <div>
          <Image
          src={'/public/assets/assets/icons/brands/vw.jpg'}
          width={60}
          height={60}
          alt=""
          />
        </div>
        <div>
          <Image
          src={'/public/assets/assets/icons/brands/skoda.jpg'}
          width={60}
          height={60}
          alt=""
          />
        </div>
        <div>
          <Image
          src={'/public/assets/assets/icons/brands/mazda.jpg'}
          width={62}
          height={50}
          alt=""
          />
        </div>
        </div>
      </motion.div>

    </section>
  )
}

export default Brands