import { Button, Card, Label, Select, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { addClient, addEmployee } from '../../redux/thunks'
import { useDispatch } from 'react-redux'

const AddNewUser = () => {
    let [user, setUser] = useState({
        name: '', email: '', address: '', city: '', password: '', mobile: 3432443242, state: '', zipcode: null, companey: '', designation: ''
    })
    let dispatch = useDispatch()

    let handleInputChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let pass = user.name + Math.round(Math.random() * 1000)

        if (user.type == 'client')
            dispatch(addClient({ ...user, password: pass }))

        if (user.type == 'employee')
            dispatch(addEmployee({ ...user, password: pass }))
    }
    return (
        <div className='items-center h-screen overflow-auto'>

            <div className="my-16 w-full"> <Card className="w-2/3 mx-auto">
                <form encType="multipart/form-data" onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className=''>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="User Type" />
                        </div>

                        <Select className='w-fit' name='type' onChange={handleInputChange} id="countries" required>
                            <option value="">Select User Type</option>
                            <option value={'client'}>Client</option>
                            <option value={'employee'}>Employee</option>
                        </Select>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Name" />
                            </div>
                            <TextInput onChange={handleInputChange} id="name" name="name" type="text" placeholder="Name" required />
                        </div>


                        <div className='w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput onChange={handleInputChange} id="email" name="email" type="text" placeholder="Email" required />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="mobile" value="Mobile" />
                        </div>
                        <TextInput onChange={handleInputChange} id="mobile" name="mobile" type="text" placeholder="Mobile" required />
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="addr" value="Address" />
                            </div>
                            <TextInput onChange={handleInputChange} id="addr" name="address" type="text" placeholder="Address" required />
                        </div>
                        <div className='w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="state" value="State" />
                            </div>
                            <TextInput onChange={handleInputChange} id="state" name="state" type="text" placeholder="State" required />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="city" value="City" />
                            </div>
                            <TextInput onChange={handleInputChange} id="city" name="city" type="text" placeholder="City" required />
                        </div>
                        <div className='w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="zip" value="Zip Code" />
                            </div>
                            <TextInput onChange={handleInputChange} id="zip" name="zipcode" type="text" placeholder="Zip Code" required />
                        </div>
                    </div>
                    {
                        user.type == 'client' && <div>
                            <div className="mb-2 block">
                                <Label htmlFor="companey" value="Companey" />
                            </div>
                            <TextInput onChange={handleInputChange} id="companey" name="companey" type="text" placeholder="Companey" required />
                        </div>
                    }{user.type == 'employee' && <div>
                        <div className="mb-2 block">
                            <Label htmlFor="designation" value="Designation" />
                        </div>
                        <TextInput onChange={handleInputChange} id="designation" name="designation" type="text" placeholder="Designation" required />
                    </div>
                    }
                    <Button type="submit">Upload</Button>
                </form>
            </Card></div>
        </div>
    )
}

export default AddNewUser
