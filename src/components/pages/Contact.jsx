import React from 'react'
import TitleSection from '../apps/TitleSection'
import { BiMap } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { SlScreenSmartphone } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";
import ContactList from '../apps/ContactList';

const Contact = () => {
    return (
        <section className='container-fluid py-28'>
            <TitleSection title='contact' />
            <div className='content-section contact'>
                <div className='grid grid-cols-3 tablet:grid-cols-5 mobile:grid-cols-1'>
                    <div className='col-span-1 tablet:col-span-2 mobile:col-span-1 info-contact'>
                        <div className='flex flex-col space-y-4 w-full'>
                            <ContactList icon={<BiMap />} title='Location' desc='A108 Adam Street, New York, NY 535022' />
                            <ContactList icon={<IoMailOutline />} title='Email' desc='info@example.com' />
                            <ContactList icon={<SlScreenSmartphone />} title='Call' desc='+62 81347650127' />
                            <ContactList icon={<AiOutlineClockCircle />} title='Open Hours' desc='Mon-Sat: 11AM - 23PM' />
                        </div>
                    </div>
                    <div className='col-span-2 tablet:col-span-3 mobile:col-span-1 form-contact'>
                        <div className='flex flex-col space-y-4 justify-center items-center w-full'>
                            <div className='grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-4 w-full'>
                                <input type="text" placeholder='Your Name' />
                                <input type="text" placeholder='Your Email' />
                            </div>
                            <input type="text" placeholder='Your Subject' />
                            <textarea placeholder='Your Message'></textarea>
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact