import React, { useEffect } from 'react'
import { Button } from "flowbite-react";

import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


const MainLayout = () => {
    let user = useSelector((x) => x.auth)
    let redirect = useNavigate()
    let location = useLocation()

    useEffect(() => {
        console.log(location)
        if (user.isAuth) {
            if (!location.pathname.includes('admin'))
                redirect('/' + user.user.type)

        } else {
            if (!location.pathname.includes('admin'))
                redirect('/login')

        }
    }, [user])
    return (
        <div>
            <Outlet />

        </div>
    )
}

export default MainLayout
