import React from 'react'
import { IoCloseOutline, IoCheckmarkOutline } from "react-icons/io5";

const PricingList = ({data}) => {
    return (
        <div className={`box-pricing ${data.focus ? 'active' : ''}`}>
            <h3>{data.tier}</h3>
            <h4>
                <sup>$</sup>{data.price}
                <span>per month</span>
            </h4>
            <ul className='mb-6 space-y-2'>
                {
                    data.list.map((list, index) => (
                        <li key={index} className={`flex space-x-1 ${list.active ? 'text-secondary' : 'text-[#ccc]'}`}>
                            {
                                list.active
                                ?   <IoCheckmarkOutline className='text-xl '/>
                                :   <IoCloseOutline className='text-xl'/>
                            }
                            
                            <label className={` ${list.active ? '' : 'line-through'}`}>{list.title}</label> 
                        </li>
                    ))
                }
            </ul>
            <button>get started</button>
        </div>
    )
}

export default PricingList