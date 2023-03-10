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
            <table className='w-full mb-6'>
                <tbody>
                    {
                        data.list.map((list, index) => (
                            <tr key={index} className={`${list.active ? 'text-secondary' : 'text-[#ccc]'}`}>
                                <td className={`w-[8%] mobile:w-[10%] align-top`}>
                                    {
                                        list.active
                                        ?   <IoCheckmarkOutline className='text-xl '/>
                                        :   <IoCloseOutline className='text-xl'/>
                                    }
                                </td>
                                <td><label className={` ${list.active ? '' : 'line-through'}`}>{list.title}</label> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button>get started</button>
        </div>
    )
}

export default PricingList