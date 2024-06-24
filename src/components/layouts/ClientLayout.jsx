import React, { useEffect } from 'react'
import { Header } from '../user/Header'
import UserSidebar from '../user/Sidebar'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

const ClientLayout = () => {
    let user = useSelector((state) => state.auth)
    let location = useLocation()
    let redirect = useNavigate()
    useEffect(() => {
        console.log(location.pathname)
        console.log(user.user.type)
        if (!user.user.isAuth && !location.pathname.includes(user.user.type)) {
            redirect('/login')
        }
    })
    return (
        <>
            <Header />
            <section className='flex gap-4'>
                <div className='h-screen'>
                    <UserSidebar />
                </div>
                <div className=' w-full'><Outlet /></div>
            </section>
        </>
    )
}

export default ClientLayout
