import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { AppsIndex, First } from '../../pages'; 
import { LayoutHeader, Footer } from '../../components'
import PagesProvider from '../context/pagesContext';

const MyRoutes = () => {

    const MainApp = () => (
        <>
            <PagesProvider>
                <LayoutHeader />
                    <Outlet />
                <Footer />
            </PagesProvider>
        </>
    );

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainApp />}>
                <Route index element={<AppsIndex />}/>
            </Route>

            <Route path='first-question' element={<First />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes