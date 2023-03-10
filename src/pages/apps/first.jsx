import React from 'react'
import { One, Three, Two } from '../../components'

const First = () => {

    return (
        <div className='container-fluid grid grid-cols-3'>
            <One />
            <Two />
            <Three />
        </div>
    )
}

export default First