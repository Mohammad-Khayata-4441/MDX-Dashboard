import React, { PropsWithChildren } from 'react'

export default function FullScreenLayout({ children }: PropsWithChildren) {
    return (
        <div className='mdx-layout mdx-layout__fullscreen'>{children}</div>
    )
}
