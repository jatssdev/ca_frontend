import { Button, Card, FileInput, Label, Navbar, Select, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UploadDocuments } from '../../redux/thunks';
import { Link } from 'react-router-dom';
const UploadDocument = () => {
    const [document, setDocument] = useState({ fromDate: '', type: '', toDate: '', file: null, vendor: '', docType: '', documentName: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();
        const data = new FormData();
        data.append('file', document.file);
        data.append('fromDate', document.fromDate);
        data.append('toDate', document.toDate);
        data.append('vendor', document.vendor);
        data.append('type', document.type);
        dispatch(UploadDocuments(data));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDocument({ ...document, [name]: value });
    };

    const handleFileChange = (e) => {
        setDocument({ ...document, file: e.target.files[0] });
    };



    return (
        <>

            {/* <Navbar className='m-4' fluid rounded>
                <Navbar.Brand as={Link} href="https://flowbite-react.com">

                    <span className="self-center whitespace-nowrapIi text-xl font-semibold dark:text-white">Documents</span>
                </Navbar.Brand>
                <Navbar.Toggle />

            </Navbar> */}
            <div className='items-center h-full flex justify-center'>

                <Card className="w-1/3">
                    <form encType="multipart/form-data" onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <Select className='w-fit ml-auto' name='type' onChange={handleInputChange} id="countries" required>
                                <option value="">Select Bill Type</option>
                                <option value={'salesBill'}> Sales Bill</option>
                                <option value={'purchaseBill'}> Purchase Bills</option>
                                <option value={'other'}>Other Document</option>
                            </Select>
                        </div>
                        {
                            document.type === 'other' && <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="docName" value="Document Name" />
                                </div>
                                <TextInput onChange={handleInputChange} id="docNAnme" name="documentName" type="text" placeholder="Document name" required />
                            </div>
                        }
                        <div className="flex gap-3">
                            <div className='w-1/2'>
                                <div className="mb-2 block">
                                    <Label htmlFor="fromDate" value="From Date" />
                                </div>
                                <TextInput onChange={handleInputChange} id="fromDate" type="date" name="fromDate" required />
                            </div>
                            <div className='w-1/2'>
                                <div className="mb-2 block">
                                    <Label htmlFor="toDate" value="To Date" />
                                </div>
                                <TextInput onChange={handleInputChange} id="toDate" type="date" name="toDate" required />
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="vendor" value="Vendor Name" />
                            </div>
                            <TextInput onChange={handleInputChange} id="vendor" name="vendor" type="text" placeholder="Vendor Name" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="file" value="Upload File" />
                            </div>
                            <FileInput onChange={handleFileChange} id="file" name="file" required />
                        </div>
                        <Button type="submit">Upload</Button>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default UploadDocument;
