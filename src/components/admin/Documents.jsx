import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDocument, getAllDocuments } from '../../redux/thunks'
import { Navbar, Select, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Documents = () => {
    let admin = useSelector((x) => x.admin)
    let dispatch = useDispatch()
    let getAllDocumentsHandler = (docType) => {
        dispatch(getAllDocuments(docType))
    }
    useEffect(() => {
        getAllDocuments(false)
    }, [])

    let DocumentsFilterHandler = (e) => {
        getAllDocumentsHandler(e.target.value)
    }
    const DeleteDocument = (id) => {
        dispatch(deleteDocument(id))

    }
    return (
        <>
            <div className="overflow-auto h-screen">
                <Navbar className='m-4' fluid rounded >
                    <Navbar.Brand as={Link} href="/">
                        <span className="self-center whitespace-nowrapIi text-xl font-semibold dark:text-white">Documents</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Select className='w-fit ml-auto' name='userType' onChange={DocumentsFilterHandler} id="countries" required>
                        <option value={''}> All</option>
                        <option value={'salesBill'}>Sales Bills</option>
                        <option value={'purchaseBill'}> Purchase Bills</option>
                        <option value={'other'}> Other Bills</option>
                    </Select>
                </Navbar>
                <div className='m-4'>
                    {admin?.documents ? <Table >
                        <Table.Head>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>From Date - To Date</Table.HeadCell>
                            <Table.HeadCell>Vendor</Table.HeadCell>
                            <Table.HeadCell>Document Type</Table.HeadCell>
                            <Table.HeadCell>
                                Actions
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                admin?.documents?.map((x) => {
                                    return <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {x.file.slice(24)}
                                        </Table.Cell>
                                        <Table.Cell>{x.fromDate} - {x.toDate}</Table.Cell>
                                        <Table.Cell>{x.vendor}</Table.Cell>
                                        <Table.Cell>{x.type}</Table.Cell>
                                        <Table.Cell>
                                            <Link className='mr-1' to={`/preview/${x.id}`}>Preview</Link>
                                            <a className='mr-1' href={`http://localhost/ca/api/user/get/document.php?id=${x.id}&download=true`} download>
                                                Download
                                            </a>
                                            <button onClick={() => DeleteDocument(x.id)} className='mr-1 bg-red-400 px-2 py-1 rounded-sm text-white'>Delete</button>
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

export default Documents
