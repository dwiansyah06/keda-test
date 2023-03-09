import React from 'react'
import TitleSection from '../apps/TitleSection'
import { BiMap } from "react-icons/bi";

const Contact = () => {
    return (
        <section className='container-fluid py-28'>
            <TitleSection title='contact' />
            <div className='content-section contact'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1 info-contact'>
                        <div className='bg-primary rounded-l-[10px] p-4 flex flex-col space-y-4'>
                            <div className='bg-[#4fdaff] bg-opacity-40 rounded-[10px] p-4'>
                                <div className='grid grid-cols-6'>
                                    <div className='col-span-1 icon cursor-pointer hover:bg-white hover:text-primary'><BiMap/></div>
                                    <div className='col-span-5 flex flex-col space-y-1 font-jost'>
                                        <h4 className='capitalize font-medium text-lg text-white'>Location : </h4>
                                        <p className='text-white text-sm'>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#4fdaff] bg-opacity-40 rounded-[10px] p-4'>
                                <div className='grid grid-cols-6'>
                                    <div className='col-span-1 icon cursor-pointer hover:bg-white hover:text-primary'><BiMap/></div>
                                    <div className='col-span-5 flex flex-col space-y-1 font-jost'>
                                        <h4 className='capitalize font-medium text-lg text-white'>Location : </h4>
                                        <p className='text-white text-sm'>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 form-contact'>
                        <div className='bg-white rounded-r-[10px]'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact