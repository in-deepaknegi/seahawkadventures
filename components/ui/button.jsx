import React, { useState } from 'react'
import Link from 'next/link'

const Button = ({ text, color, url }) => {

    let bg = 'bg-orange-500'; // Default background color
    let hbg = 'hover:bg-orange-600';

    if(color){
        bg = color;
        hbg = 'hover:bg-blue-600';
    }


    return (
        <Link
            className={`rounded-md max-w-md sm:max-w-none mx-auto sm:mx-0 font-semibold px-3.5 tracking-wide py-2.5 text-sm text-white shadow-sm ${hbg} ${bg}`}
            href={`${url}`}
        >
            {text}
        </Link>
    )
}

export default Button