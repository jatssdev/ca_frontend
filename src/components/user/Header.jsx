
import { NavLink as Link } from 'react-router-dom'

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/thunks';

export function Header() {
    let dispatch = useDispatch()
    const LogoutHandler = () => {
        dispatch(logoutUser())
    }
    return (
        <Navbar fluid rounded>
            <Navbar.Brand as={Link} href="https://flowbite-react.com">
                {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                <span className="self-center whitespace-nowrapIi text-3xl font-semibold dark:text-white ">Mera<b className='text-red-400'>Ca</b>cs</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Dropdown label="User" dismissOnClick={false} >

                    <Dropdown.Item onClick={LogoutHandler}>Sign out</Dropdown.Item>
                </Dropdown>
                {/* <div>
                    <Avatar img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt="avatar of Jese" rounded />
                </div> */}
            </Navbar.Collapse>
        </Navbar>
    );
}
