import React, { useContext } from 'react'
import { IoMdLogIn } from "react-icons/io";
import { pagesContext } from '../../config/context/pagesContext';

const Hero = () => {

    const context = useContext(pagesContext);

    return (
        <div className='bg-primary h-[100vh] landscape-mobile:h-full flex justify-center items-center'>
            <div className='flex justify-between space-x-28 items-center container-fluid py-8 mobile:space-x-0 mobile:flex-col-reverse mobile:justify-start tablet:space-x-0 tablet:flex-col-reverse tablet:justify-start'>
                <div className='space-y-4'>
                    <h1 className='text-5xl medium-mobile:text-4xl small-mobile:text-xl uppercase font-bold text-white font-jost'>Lorem Ipsum DOlor</h1>
                    <p className='text-sm text-justify text-white small-mobile:text-xs'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='flex space-x-4 font-jost items-center'>
                        <button className='capitalize px-10 py-2 rounded-[50px] bg-white font-medium text-sm text-primary mobile:w-full landscape-mobile:w-max'>Get Started</button>
                        <button onClick={context.loginAction} className='uppercase py-2 rounded-[50px] font-medium text-sm text-white mobile:w-full flex space-x-2 items-center cursor-pointer'><IoMdLogIn className='text-2xl'/> <label className='cursor-pointer'>Login</label></button>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL+"/undraw_dev_focus_re_6iwt.svg"} className="w-1/3 medium-mobile:w-11/12 small-mobile:w-10/12 mobile:mb-12 tablet:mb-12 tablet:w-4/5 landscape-mobile:w-1/2"  alt="jumbo"/>
            </div>
        </div>
    )
}

export default Hero