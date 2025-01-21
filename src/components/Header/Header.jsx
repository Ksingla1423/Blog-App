import React from 'react';
import {Container ,Logo,LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const authStatus=useSelector((state)=> state.auth.status)

    const navigate =useNavigate()

    const navItems=[
        {
            name:'Home',
            slug:"/",
            active:true
        },
        {
            name:'Login',
            slug:"/login",
            active:!authStatus
        },
        {
            name:"SignUp",
            slug:"/signup",
            active:!authStatus
        },
        {
            name:"All Posts",
            slug:"/all-posts",
            active:authStatus
        },
        {
            name:"Add Post",
            slug:"/add-post",
            active:authStatus

        }
    ]
    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <link to='/'>
                            <Logo width="70px"/>
                        </link>
                    </div>
                    <ul>
                        {navItems.map((item)=> item.active? (
                            <li key={item.name}>
                                <button
                                onClick={()=>navigate(item.slug)}
                                className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-800 duration-200'
                                >{item.name}</button>
                            </li>
                        ): null )}
                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
