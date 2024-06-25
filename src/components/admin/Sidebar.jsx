

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
    let user = useSelector((x) => x.auth)
    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <NavLink to={`/admin`}>
                        <Sidebar.Item icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                    </NavLink>
                    <NavLink to={`/admin/users`}>
                        <Sidebar.Item icon={HiViewBoards} >
                            Users
                        </Sidebar.Item>
                    </NavLink>
                    <NavLink to={`/admin/add`}>
                        <Sidebar.Item icon={HiInbox} >
                            Add New User
                        </Sidebar.Item>
                    </NavLink>
                    <NavLink to={`/admin/documents`}>
                        <Sidebar.Item icon={HiViewBoards} >
                            Documents
                        </Sidebar.Item>
                    </NavLink>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
