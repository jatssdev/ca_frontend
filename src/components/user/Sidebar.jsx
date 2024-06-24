

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserSidebar() {
    let user = useSelector((x) => x.auth)
    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <NavLink to={`/${user?.user?.type}`}>
                        <Sidebar.Item icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                    </NavLink>
                    <NavLink to={`/${user?.user?.type}/documents`}>
                        <Sidebar.Item icon={HiViewBoards} >
                            Documents
                        </Sidebar.Item>
                    </NavLink>
                    <NavLink to={`/${user?.user?.type}/upload/document`}>
                        <Sidebar.Item icon={HiInbox} >
                            Upload Document
                        </Sidebar.Item>
                    </NavLink>

                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
