import React from 'react'

const Footer = () => {
    return (
        <div className='footer container-fluid'>
            <div className="copyright">
                © Copyright <span onClick={() => window.open("https://new-portofolio-black.vercel.app")}>Lorem</span>. All Rights Reserved
            </div>

            <div className='designed'>
                Designed By <span onClick={() => window.open("https://new-portofolio-black.vercel.app")}>Mas DW</span>
            </div>
        </div>
    )
}

export default Footer