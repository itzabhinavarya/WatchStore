import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Layout = () => {
    return (
        <div>
            <Header />

            {/* This is where nested routes will be displayed */}
            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout
