import React, { useEffect, useState, useContext } from 'react'
import { AiOutlineMenu,AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
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
            <div className={`container-fluid py-4 text-white flex justify-between items-center uppercase text-sm font-medium sticky top-0 w-full z-50 ${isScroll ? 'bg-resp' : 'bg-primary'} transition-all duration-300 font-jost`}>
                <h3 className='flex space-x-2 items-center cursor-pointer'><CgDribbble className='text-xl'/> <label className='cursor-pointer'>Lorem</label></h3>
                <AiOutlineMenu onClick={showSidebar} className='hidden mobile:block text-2xl cursor-pointer' />
                <div className='flex space-x-4 items-center mobile:hidden'>
                    <h3 className='cursor-pointer'>Home</h3>
                    <h3 className='cursor-pointer'>About</h3>
                    <h3 className='cursor-pointer'>Pricing</h3>
                    <h3 className='cursor-pointer'>Contact</h3>
                    <button onClick={context.loginAction} className={`uppercase border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-2 rounded-[50px] font-medium text-sm transition-all duration-300`}>Login</button>
                </div>
            </div>
            
            {/* RESPONSIVE SIDEBAR */}
            <div className={`fixed bg-primary w-3/5 right-0 top-0 h-full z-[52] p-4 ${context.isClickMenu ? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-300`}>
                <div className='header-sidebar'>
                    <h3><CgDribbble className='text-xl'/> <label>Lorem</label></h3>
                    <AiFillCloseCircle onClick={closeSidebar} className='text-xl text-white' />
                </div>
                <div className='content-sidebar'>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Pricing</h3>
                    <h3>Contact</h3>
                    <button onClick={context.loginAction}>Login</button>
                </div>
            </div>

            {/* LOGIN MODAL */}
            <div className={`fixed w-full h-full flex justify-center items-center top-0 ${context.isShowLogin ? 'translate-y-0' : '-translate-y-full'} translate-y-0 transition-all ease-in-out duration-300 p-7 z-[52]`}>
                <div className='flex flex-col w-4/6 mobile:w-11/12 h-max mobile:h-max tablet:h-max landscape-mobile:h-4/5 landscape-mobile:overflow-scroll space-y-2 rounded-xl relative'>
                    <div className='grid grid-cols-2 mobile:grid-cols-1 landscape-mobile:grid-cols-1 tablet:grid-cols-1 static mobile:static landscape-mobile:static tablet:static w-full h-full'>
                        <div className='bg-primary mobile:hidden landscape-mobile:hidden tablet:hidden flex flex-col space-y-8 justify-center items-center rounded-l-[20px] p-4'>
                            <img src={process.env.PUBLIC_URL+"/undraw_secure_login_pdn4.svg"} className="w-1/2 medium-mobile:w-11/12 small-mobile:w-10/12 mobile:mb-12 tablet:mb-12 tablet:w-4/5 landscape-mobile:w-1/2"  alt="jumbo"/>
                            <div className='space-y-1 text-center w-4/5'>
                                <h4 className='text-white font-medium font-jost text-xl'>Maccenas mattis egestas</h4>
                                <p className='text-white text-xs font-jost font-light'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-r-[20px] mobile:rounded-l-[20px] tablet:rounded-l-[20px] p-8 mobile:p-8 relative'>
                            <div style={{ padding : 'inherit' }} className='absolute top-0 right-0'>
                                <AiOutlineCloseCircle onClick={context.loginAction} className='text-2xl mobile:text-xl text-primary cursor-pointer' />
                            </div>

                            <div className='flex flex-col justify-center h-full space-y-8 pt-5'>
                                <h4 className='text-primary font-medium font-jost text-3xl'>Login</h4>
                                <div className='flex flex-col space-y-4'>
                                    <div className='space-y-2'>
                                        <label className='text-xs font-semibold'>Username / Email</label>
                                        <input className='p-4 w-full border-[1px] border-[#ced4da] text-sm text-[#212529] font-light rounded-[20px]' placeholder='Username or Email' />
                                    </div>
                                    <div className='space-y-2'>
                                        <label className='text-xs font-semibold'>Password</label>
                                        <input type="password" className='p-4 w-full border-[1px] border-[#ced4da] text-sm text-[#212529] font-light rounded-[20px]' placeholder='Password' />
                                        <label className='text-xs font-semibold text-primary float-right cursor-pointer'>Forgot Password ?</label>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button className={`uppercase px-10 border-2 border-white tracking-wider py-3 rounded-[50px] w-max mobile:w-full landscape-mobile:w-full bg-primary text-white hover:bg-white hover:text-primary hover:border-2 hover:border-primary font-medium text-sm transition-all duration-300`}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {context.isShowOpacity && <div className='fixed bg-black bg-opacity-50 top-0 left-0 w-full h-full z-[51]'></div>}
        </>
    )
}

export default LayoutHeader