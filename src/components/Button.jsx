import React from 'react';

const Button = ({
    children,
    type='button',
    bgColor='bg-blue-500',
    textColor='text-white',
    className='',
    ...props    
}) => {
    
    returns (
            <button
            className={`inline-block px-6 py-2 rounded-md hover:bg-blue-800 duration-200 ${className} ${bgColor} ${textColor}`}
            {...props}
            >
            {children}
            </button>
    );
}

export default Button;