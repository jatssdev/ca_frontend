import React, { useEffect } from 'react'
import { Header } from '../admin/Header'

import { Outlet } from 'react-router-dom'
import AdminSidebar from '../admin/Sidebar'
import AdminLogin from '../admin/AdminLogin'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDocuments, getAllUsers } from '../../redux/thunks'

const AdminLayout = () => {
    let admin = useSelector((state) => state.admin)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDocuments(false))
        dispatch(getAllUsers(false))
    }, [])
    return (
        <>
            {admin?.isAuth ? <div>
                <Header />
                <section className='flex gap-4'>
                    <div className='h-screen'>
                        <AdminSidebar />
                    </div>
                    <div className=' w-full'><Outlet /></div>
                </section>
            </div> : <AdminLogin />}
        </>
    )
}

export default AdminLayout
