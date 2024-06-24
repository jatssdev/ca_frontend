import React, { useEffect, useState } from 'react'
import { Button, Card, Select, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/thunks';
import { useNavigate, useLocation } from 'react-router-dom';


const UserLogin = () => {
    let [user, setUser] = useState({ email: '', password: '', userType: '' })
    let location = useLocation()
    const userValueHandler = (e) => [
        setUser({ ...user, [e.target.name]: e.target.value })
    ]
    let dispatch = useDispatch()

    const LoginHandler = (e) => {
        e.preventDefault()
        dispatch(loginUser(user))
    }
    let userContext = useSelector((x) => x.auth)
    let redirect = useNavigate()
    useEffect(() => {
        if (!userContext.isAuth) {
            if (!location.pathname.includes('admin'))
                redirect('/login')
        } else {
            if (!location.pathname.includes('admin'))
                redirect(`/${userContext.user.type}`)
        }
    }, [userContext])
    return (
        <div className='h-screen w-full flex justify-center items-center'>




            <Card className="w-1/3">
                <form onSubmit={LoginHandler} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput onChange={userValueHandler} id="email1" type="email" name='email' placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput onChange={userValueHandler} id="password1" name='password' type="password" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Select your country" />
                        </div>
                        <Select name='userType' onChange={userValueHandler} id="countries" required>
                            <option>Select User Type</option>
                            <option value={'client'}>Client</option>
                            <option value={'employee'}> Employee</option>
                        </Select>
                    </div>
                    <Button type="submit">Login</Button>
                </form>
            </Card>
        </div>
    )
}

export default UserLogin
