import React from 'react'
import Link from 'next/link'

const Button = ({ text }) => {
    return (
        <Link
            className="rounded-md bg-orange-500 font-semibold px-3.5 tracking-wide py-2.5 text-sm text-white shadow-sm hover:bg-orange-600"
            href="/explore"
        >
            {text}
        </Link>
    )
}

export default Button