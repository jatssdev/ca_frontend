import { PieChart } from '@mui/x-charts'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDocuments } from '../../redux/thunks'

const Chart = () => {
    let [bills, setBills] = useState({ salesBill: 0, purchaseBill: 0, other: 0 })


    let docs = useSelector((x) => x.docs)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetDocuments(false))
    }, []);
    useEffect(() => {
        console.log(docs)
        const billCounts = { salesBill: 0, purchaseBill: 0, other: 0 };

        docs?.documents?.forEach((doc) => {
            if (billCounts[doc.type] !== undefined) {
                billCounts[doc.type]++;
            }
        });

        setBills(billCounts);

    }, [docs]);




    return (
        <>
            <section className='flex w-full gap-3'>

                <div className='w-1/2 bg-[rgba(250,250,250,1)] shadow  p-4' data-aos="fade-left">
                    <h3 className='font-bold text-xl mb-3'>Total Documents : {docs?.documents?.length}</h3>

                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: bills.salesBill, label: 'Sales Bills' },
                                    { id: 1, value: bills.purchaseBill, label: 'Purchase Bills' },
                                    { id: 2, value: bills.other, label: 'other Bills' },
                                ],
                            },
                        ]}
                        width={550}
                        height={250}
                    />
                </div>
            </section>

        </>
    )
}

export default Chart
