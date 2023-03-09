import React from 'react'
import { BiCheckDouble } from "react-icons/bi";
import TitleSection from '../apps/TitleSection'

const AboutUs = () => {
    return (
        <section className='container-fluid py-28'>
            <TitleSection title='about us' />
            <div className='content-section about'>
                <div className='grid grid-cols-2 mobile:grid-cols-1 gap-8'>
                    <div>
                        <p className='text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul>
                            <li className='flex space-x-2 items-center mobile:items-start'><BiCheckDouble className='text-2xl mobile:text-3xl text-[#00c1f5]'/> <label>Ullamco laboris nisi ut aliquip ex ea commodo consequat</label></li>
                            <li className='flex space-x-2 items-center mobile:items-start'><BiCheckDouble className='text-2xl mobile:text-3xl text-[#00c1f5]'/> <label>Duis aute irure dolor in reprehenderit in voluptate velit</label></li>
                            <li className='flex space-x-2 items-center mobile:items-start'><BiCheckDouble className='text-2xl mobile:text-3xl text-[#00c1f5]'/> <label>Ullamco laboris nisi ut aliquip ex ea commodo consequat</label></li>
                        </ul>
                    </div>
                    <div>
                        <p className='mb-4 text-justify'>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className={`uppercase border-2 border-[#00c1f5] text-[#00c1f5] hover:bg-[#00c1f5] hover:text-white px-10 py-2 rounded-md font-bold text-sm mobile:w-full landscape-mobile:w-max`}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs