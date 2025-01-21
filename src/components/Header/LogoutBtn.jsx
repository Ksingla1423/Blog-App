import React from 'react';
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch=useDispatch()

    const logoutHandler=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
    return (
        <button
        className='inline-block px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-800 duration-200'
        >Logout</button>
    );
}

export default LogoutBtn;
