import { PieChart } from '@mui/x-charts'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Chart = () => {
    let [bills, setBills] = useState({ salesBill: 0, purchaseBill: 0, other: 0 })
    let [users, setUsers] = useState({ client: 0, employee: 0 })
    let admin = useSelector((x) => x.admin)

    useEffect(() => {
        const billCounts = { salesBill: 0, purchaseBill: 0, other: 0 };
        const usersCount = { client: 0, employee: 0 };
        admin.documents.forEach((doc) => {
            if (billCounts[doc.type] !== undefined) {
                billCounts[doc.type]++;
            }
        });
        admin.users.forEach((user) => {
            if (usersCount[user.type] !== undefined) {
                usersCount[user.type]++;
            }
        });
        setBills(billCounts);
        setUsers(usersCount);
    }, [admin]);




    return (
        <>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: users.client, label: 'Clients' },
                            { id: 1, value: users.employee, label: 'Employees' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
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
                width={400}
                height={200}
            />

        </>
    )
}

export default Chart
