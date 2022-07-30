import React, { ReactNode } from 'react'
import { Header } from 'components/header/header'
import Image from 'next/image'

export const BaseLayout: React.FC<{
    children?: ReactNode
}> = ({ children }) => {
    return (
        <>
            <div className='relative'>
                <div className='absolute w-full h-[1000px] z-[-1]'>
                    <Image className="w-full b-0" src={'/background.png'} alt="" layout='fill' />
                    <Image className="" src={'/line.svg'} alt="" layout='fill' />
                </div>
                <Header />
                <div className="container mx-auto pt-10 pb-24">{children}</div>
            </div>
        </>
    )
}