import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { AppsIndex, First } from '../../pages'; 
import { LayoutHeader } from '../../components'
import PagesProvider from '../context/pagesContext';

const MyRoutes = () => {

    const MainApp = () => (
        <>
            <PagesProvider>
                <LayoutHeader />
                    <Outlet />
            </PagesProvider>
        </>
    );

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainApp />}>
                <Route index element={<AppsIndex />}/>
                <Route path='first-question' element={<First />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes