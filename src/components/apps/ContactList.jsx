import React from 'react'

const ContactList = ({icon, title, desc}) => {
    return (
        <div className='bg-[#4fdaff] bg-opacity-40 rounded-[10px] p-4'>
            <table className='w-full'>
                <tbody>
                    <tr>
                        <td className='w-[12%] align-top'>
                            <div className='icon cursor-pointer hover:bg-white hover:text-primary'>{icon}</div>
                        </td>
                        <td>
                            <div className='flex flex-col space-y-1 font-jost'>
                                <h4 className='capitalize font-medium text-lg text-white'>{title} : </h4>
                                <p className='text-white text-sm'>{desc}</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ContactList