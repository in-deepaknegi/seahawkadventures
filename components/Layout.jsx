import React from 'react'

const Layout = ({ components }) => {
    return (
        <>
            {components.map((component, i) => (
                <div key={i}>
                    {component.c1}
                </div>
            ))}
        </>
    )
}

export default Layout