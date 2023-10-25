'use client';

// import swiper react components
import {Swiper,SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css'

// next image
import Image from 'next/image';

// icons
import {AiTwotoneStar} from 'react-icons/ai';

// framer
import {motion} from 'framer-motion'

// variants
import { fadeIn } from '../variants';

// car data
const cars = [
    {
        type:'Hatchback',
        name:'Ford Focus',
        price:29,
        stars:3.5,
        image:'/public/assets/assets/images/carSlider/car01.jpg',
        info: [
            {
                icon:'/public/assets/assets/icons/carSlider/gearshift.jpg',
                text:'Manuel',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/seat.jpg',
                text:'5 Seats',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/gas.jpg',
                text:'Gas',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/engine.jpg',
                text:'1600 HP',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/wheel.jpg',
                text:'Front',
            },
        ]
    },
    {
        type:'Sedan',
        name:'Toyota Corolla',
        price:25,
        stars:5,
        image:'/public/assets/assets/images/carSlider/car02.jpg',
        info: [
            {
                icon:'/public/assets/assets/icons/carSlider/gearshift.jpg',
                text:'Manuel',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/seat.jpg',
                text:'5 Seats',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/gas.jpg',
                text:'Gas',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/engine.jpg',
                text:'1600 HP',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/wheel.jpg',
                text:'Front',
            },
        ]
    },
    {
        type:'SUV',
        name:'Honda CR-V',
        price:35,
        stars:4.7,
        image:'/public/assets/assets/images/carSlider/car03.jpg',
        info: [
            {
                icon:'/public/assets/assets/icons/carSlider/gearshift.jpg',
                text:'Automatic',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/seat.jpg',
                text:'5 Seats',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/gas.jpg',
                text:'Gas',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/engine.jpg',
                text:'1600 HP',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/wheel.jpg',
                text:'Front',
            },
        ]
    },
    {
        type:'Convertible',
        name:'Mazda MX-5',
        price:32,
        stars:4.9,
        image:'/public/assets/assets/images/carSlider/car02.jpg',
        info: [
            {
                icon:'/public/assets/assets/icons/carSlider/gearshift.jpg',
                text:'Automatic',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/seat.jpg',
                text:'5 Seats',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/gas.jpg',
                text:'Gas',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/engine.jpg',
                text:'1600 HP',
            },
            {
                icon:'/public/assets/assets/icons/carSlider/wheel.jpg',
                text:'Front',
            },
        ]
    },
]

export default function CarSlider() {
    return <motion.div 
    className='container mx-auto'
    variants={fadeIn('up', 0.4)} 
    initial="hidden" 
    whileInView={"show"}
    viewport={{once:false, amount:0.2}}>
<Swiper
breakpoints={{
    320:{slidesPerView:1, spaceBetween:15},
    640:{slidesPerView:2,spaceBetween:32},
    1260:{slidesPerView:3,spaceBetween:32},
}}
>
{cars.map((car,index) => {
    return(
        <SwiperSlide key={index}>
            <div className='max-w-[385px] mx-auto sm:mx-0'>
                <Image src={car.image} width={380} height={284} alt=''/>
                <div className='flex justify-between'>
                    <div>
                        <div className='text-[13px] text-secondary uppercase'>
                      {car.type}
                        </div>
                        <h3 className='text-lg uppercase font-bold'>{car.name}</h3>
                        <div className='mb-10 text-accent font-semibold uppercase'>{car.price}/day</div>
                    </div>
                </div>
                {/* stars */}
                <div className='flex gap-x-2 text-accent h-max'>
                    <AiTwotoneStar/>
                    <AiTwotoneStar/>
                    <AiTwotoneStar/>
                    <AiTwotoneStar/>
                    <AiTwotoneStar/>
                </div>
                {/* car info */}
                <div className='flex gap-x-3 xl:gap-x-4 w-max mb-10'>
                    {car.info.map ((item,index) => {
                        return (
                            <div key={index} className='flex flex-col items-center'>
                                <div className='bg-primary w-12 h-12 rounded-full flex
                                justify-center items-center mb-2'>
                                    <Image
                                    src={item.icon}
                                    width={24}
                                    height={24}
                                    alt=''
                                    />
                                </div>
                                <div className='text-[12px] uppercase'>{item.text}</div>
                            </div>
                        )
                    })}
                </div>
                <button className='btn btn-accent btn-lg'>See  details</button>
            </div>
        </SwiperSlide>
    )
})}
</Swiper>
    </motion.div>
}

