import React from 'react'
import PricingList from '../apps/PricingList'
import TitleSection from '../apps/TitleSection'

const Pricing = () => {

    const datas = [
        {
            "tier" : 'Basic',
            "price" : 0,
            "focus" : false,
            "list" : [
                {
                    "active" : true,
                    "title" : 'Mencatat barang masuk'
                },
                {
                    "active" : true,
                    "title" : 'Mencatat barang keluar'
                },
                {
                    "active" : true,
                    "title" : 'Mencatat hasil keuntungan'
                },
                {
                    "active" : false,
                    "title" : 'Dapat menganalisa hasil penjualan dengan CHART'
                },
                {
                    "active" : false,
                    "title" : 'Support 7x24 Jam'
                },
                {
                    "active" : false,
                    "title" : 'Export data ke Excel'
                },
                {
                    "active" : false,
                    "title" : 'AI Prediksi penghasilan'
                },
            ]
        },
        {
            "tier" : 'Business',
            "price" : 50,
            "focus" : true,
            "list" : [
                {
                    "active" : true,
                    "title" : 'Mencatat barang masuk'
                },
                {
                    "active" : true,
                    "title" : 'Mencatat barang keluar'
                },
                {
                    "active" : true,
                    "title" : 'Mencatat hasil keuntungan'
                },
                {
                    "active" : true,
                    "title" : 'Dapat menganalisa hasil penjualan dengan CHART'
                },
                {
                    "active" : true,
                    "title" : 'Support 7x24 Jam'
                },
                {
                    "active" : false,
                    "title" : 'Export data ke Excel'
                },
                {
                    "active" : false,
                    "title" : 'AI Prediksi penghasilan'
                },
            ]
        },
        {
            "tier" : 'Entrepreneur',
            "price" : 100,
            "focus" : false,
            "list" : [
                {
                    "active" : true,
                    "title" : 'Mencatat barang masuk'
                },
                {
                    "active" : true,
                    "title" : 'Mencatat barang keluar'
                },
                {
                    "active" : true,
                    "title" : 'Mencatat hasil keuntungan'
                },
                {
                    "active" : true,
                    "title" : 'Dapat menganalisa hasil penjualan dengan CHART'
                },
                {
                    "active" : true,
                    "title" : 'Support 7x24 Jam'
                },
                {
                    "active" : true,
                    "title" : 'Export data ke Excel'
                },
                {
                    "active" : true,
                    "title" : 'AI Prediksi penghasilan'
                },
            ]
        },
    ]

    return (
        <section className='container-fluid py-28 bg-[#f3f5fa]'>
            <TitleSection title='pricing' />
            <div className='content-section pricing'>
                <div className='grid grid-cols-3 mobile:grid-cols-1 gap-8'>
                    {
                        datas.map((data, index) => (
                            <PricingList key={index} data={data} />
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Pricing