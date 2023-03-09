import React, { useEffect, useState, useContext } from 'react'
import { AiOutlineMenu,AiFillCloseCircle } from "react-icons/ai";
import { CgDribbble } from "react-icons/cg";
import { pagesContext } from '../../config/context/pagesContext';

const LayoutHeader = () => {

    const [isScroll, setIsScroll] = useState(false)
    const context = useContext(pagesContext);

    const showSidebar = () => {
        context.setIsShowOpacity(true)
        setTimeout(() => {
            context.setIsClickMenu(true)
        }, 200);
    }

    const closeSidebar = () => {
        context.setIsClickMenu(false)
        setTimeout(() => {
            context.setIsShowOpacity(false)
        }, 200);
    }
    
    useEffect(() => {
        function updatePosition() {
            if(window.scrollY >= 25) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
    
        window.addEventListener('scroll', updatePosition)
        updatePosition()
    
        return () => window.removeEventListener('scroll', updatePosition)
    }, [])
    
    return (
        <>
            <div className={`container-fluid py-4 text-white flex justify-between items-center uppercase text-sm font-medium sticky top-0 w-full z-50 ${isScroll ? 'bg-resp' : 'bg-[#00c1f5]'} transition-all duration-300 font-jost`}>
                <h3 className='flex space-x-2 items-center cursor-pointer'><CgDribbble className='text-xl'/> <label className='cursor-pointer'>Lorem</label></h3>
                <AiOutlineMenu onClick={showSidebar} className='hidden mobile:block text-2xl cursor-pointer' />
                <div className='flex space-x-4 items-center mobile:hidden'>
                    <h3 className='cursor-pointer'>Home</h3>
                    <h3 className='cursor-pointer'>About</h3>
                    <h3 className='cursor-pointer'>Pricing</h3>
                    <h3 className='cursor-pointer'>Contact</h3>
                    <button className={`uppercase border-2 border-white text-white hover:bg-white hover:text-[#00c1f5] px-10 py-2 rounded-[50px] font-medium text-sm transition-all duration-300`}>Login</button>
                </div>
            </div>
            
            {/* RESPONSIVE SIDEBAR */}
            <div className={`fixed bg-[#00c1f5] w-3/5 right-0 top-0 h-full z-[52] p-4 ${context.isClickMenu ? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-300`}>
                <div className='header-sidebar'>
                    <h3><CgDribbble className='text-xl'/> <label>Lorem</label></h3>
                    <AiFillCloseCircle onClick={closeSidebar} className='text-xl text-white' />
                </div>
                <div className='content-sidebar'>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Pricing</h3>
                    <h3>Contact</h3>
                    <button>Login</button>
                </div>
            </div>
            {context.isShowOpacity && <div className='fixed bg-black bg-opacity-50 top-0 left-0 w-full h-full z-[51]'></div>}
        </>
    )
}

export default LayoutHeader