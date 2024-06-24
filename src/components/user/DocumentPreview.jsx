import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DocumentPreview = () => {
    let param = useParams()
    useEffect(() => {
        console.log(param)
    })

    const [fileUrl, setFileUrl] = useState('');

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await fetch(`/api/user/get/document.php?id=${param.id}`);
                if (!response.ok) {
                    throw new Error('Document not found');
                }
                const data = await response.blob();
                const file = new File([data], 'document.pdf', { type: 'application/pdf' }); // Adjust type based on your document type

                const fileURL = URL.createObjectURL(file);
                setFileUrl(fileURL);
            } catch (error) {
                console.error('Error fetching document:', error);
                // Handle error state or UI
            }
        };

        fetchDocument();

        return () => {
            URL.revokeObjectURL(fileUrl); // Clean up URL object
        };
    }, [,]);

    return (
        <div>
            {fileUrl && (
                <embed src={fileUrl} type="application/pdf" className='h-screen w-full' />
                // Adjust attributes based on your document type and styling
            )}
        </div>
    );
};

export default DocumentPreview;
