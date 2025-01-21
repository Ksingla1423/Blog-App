import React,{useId} from 'react';

const Select = ({
    options,
    label,
    className='',
    ...props
},ref) => {
    const id=useId();
    return (
        <div className='w-full'>
            {label && 
            <label htmlFor={id} className=''></label>
            }
            <select id={id}
            {...props}
            ref={ref}
            className={`px-3 py-2 rounded-lg border border-gray-200 w-full duration-200 bg-white text-black outline-none focus:bg-gray-50 ${className}`}
            >
                {options?.map((option)=>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default React.forwardRef(Select);


// Select is a component used for the add post in which there was a feature of keeping a post active or inactive it is used with forward ref to pass ref to other where tthe post is active 
