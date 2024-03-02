import React, { PropsWithChildren } from 'react'

export default function RootLayout(props: PropsWithChildren) {
    return (
        <div className='root-layout'>
            {props.children}
        </div>
    )
}
