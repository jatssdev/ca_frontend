import React, { useState } from 'react'
import { adminLogin } from '../../redux/thunks'
import { Button, Card, Label, Select, TextInput } from 'flowbite-react'
import { useDispatch } from 'react-redux'

const AdminLogin = () => {
    let [admin, setAdmin] = useState({ email: '', password: '' })
    let dispatch = useDispatch()
    let AdminLoginHandler = (e) => {
        e.preventDefault();
        dispatch(adminLogin(admin))
    }
    let adminValueHandler = (e) => {
        let { name, value } = e.target
        setAdmin((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center'>




                <Card className="w-1/3">
                    <form onSubmit={AdminLoginHandler} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput onChange={adminValueHandler} id="email1" type="email" name='email' placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput onChange={adminValueHandler} id="password1" name='password' type="password" required />
                        </div>


                        <Button type="submit">Login</Button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default AdminLogin
