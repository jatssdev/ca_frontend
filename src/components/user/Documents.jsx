import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDocuments } from '../../redux/thunks'
import { Navbar, Select, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Documents = () => {

    let docs = useSelector((x) => x.docs)
    let dispatch = useDispatch()
    let getAllDocuments = (docType) => {
        dispatch(GetDocuments(docType))
    }
    useEffect(() => {
        getAllDocuments(false)
    }, [])
    useEffect(() => {
        console.log('jatin', docs)
    }, [docs])
    let DocumentsFilterHandler = (e) => {
        getAllDocuments(e.target.value)
    }
    return (
        <>
            <div className="overflow-auto h-screen">
                <Navbar className='m-4' fluid rounded >
                    <Navbar.Brand as={Link} href="https://flowbite-react.com">

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
                    {docs?.documents ? <Table  >
                        <Table.Head>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>From Date - To Date</Table.HeadCell>
                            <Table.HeadCell>Vendor</Table.HeadCell>
                            <Table.HeadCell>Document Type</Table.HeadCell>

                            <Table.HeadCell>
                                Actoins
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                docs?.documents?.map((x, index) => {
                                    const aosPos = index % 2 === 0 ? 'fade-right' : 'fade-left';
                                    return <Table.Row data-aos={aosPos} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {x.file.slice(24)}
                                        </Table.Cell>
                                        <Table.Cell>{x.fromDate} - {x.toDate}</Table.Cell>
                                        <Table.Cell>{x.vendor}</Table.Cell>
                                        <Table.Cell>{x.type}</Table.Cell>

                                        <Table.Cell>
                                            <Link className='mx-2' to={`/preview/${x.id}`}>Preview</Link>
                                            <a className='mx-2' href={`http://localhost/ca/api/user/get/document.php?id=${x.id}&download=true`} download>
                                                Download
                                            </a>
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
