import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fade } from "react-reveal";

export default function CardCard({ name, src, id, index }) {
    const router = useRouter()
    return (
        <Fade up delay={index * 100}>
            <div className='overflow-none cursor-pointer' onClick={() => router.push(`/car/${id}`)}>
                <div className='relative h-48 w-full'>
                    <Image
                        src={src}
                        alt={name}
                        width={200}
                        height={300}
                        className='h-full w-full object-cover hover:scale-110 transition-all duration-500 ease-in-out'
                        loading="lazy"
                    />
                </div>
                <div className='p-4 w-full'>
                    <h3 className='text-gray-700 uppercase text-center'>{name}</h3>
                </div>
            </div>
        </Fade>

    )
}