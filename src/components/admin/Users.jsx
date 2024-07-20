import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers } from '../../redux/thunks'
import { Navbar, Select, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Users = () => {
    let admin = useSelector((x) => x.admin)
    let dispatch = useDispatch()
    let getAllDocuments = (docType) => {
        dispatch(getAllUsers(docType))
    }
    useEffect(() => {
        dispatch(getAllUsers(false))
    }, [])
    useEffect(() => {
        console.log('jatin', admin)
    }, [admin])
    let UsersFilterHandler = (e) => {
        getAllDocuments(e.target.value)
    }
    const DeleteUser = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <>
            <div className="overflow-auto h-screen">
                <Navbar className='m-4' fluid rounded >
                    <Navbar.Brand as={Link} href="https://flowbite-react.com">

                        <span className="self-center whitespace-nowrapIi text-xl font-semibold dark:text-white">Users</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Select className='w-fit ml-auto' name='userType' onChange={UsersFilterHandler} id="countries" required>
                        <option value={''}> All</option>
                        <option value={'client'}>Clients</option>
                        <option value={'employee'}>Employees</option>
                    </Select>
                </Navbar>
                <div className='m-4'>
                    {admin?.users ? <Table >
                        <Table.Head>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>Email</Table.HeadCell>
                            <Table.HeadCell>Designation / Companey</Table.HeadCell>
                            <Table.HeadCell>Type</Table.HeadCell>
                            <Table.HeadCell>
                                Actoins
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                admin?.users?.map((x) => {
                                    return <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {x.name}
                                        </Table.Cell>
                                        <Table.Cell>{x.email}</Table.Cell>
                                        <Table.Cell>{x.type == 'client' ? x.companey : x.designation}</Table.Cell>
                                        <Table.Cell>{x.type}</Table.Cell>

                                        <Table.Cell>
                                            {/* <Link className='mx-2' to={`/preview/${x.id}`}>Preview</Link>
                                            <a className='mx-2' href={`http://localhost/ca/api/user/get/document.php?id=${x.id}&download=true`} download>
                                                Download
                                            </a> */}
                                            <button onClick={() => DeleteUser(x.id)} className='mr-1 bg-red-400 px-2 py-1 rounded-sm text-white'>Delete</button>
                                            {/* <button className='bg-green-400 px-2 py-1 rounded-sm text-white'>Edit</button> */}
                                        </Table.Cell>
                                    </Table.Row>
                                })
                            }


                        </Table.Body>
                    </Table> : <h1 className='text-center'>No document To See <Link>Upload Your First</Link></h1>}
                </div>
            </div>
        </>
    )
}

export default Users
