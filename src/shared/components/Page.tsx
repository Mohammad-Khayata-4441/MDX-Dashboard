import React, { PropsWithChildren, ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
interface Props {
    title: string,
    actions?: ReactNode
}
export default function Page({ title, actions, children }: PropsWithChildren<Props>) {
    return (
        <>
            <Box display={'flex'} py={2} justifyContent={'space-between'} alignItems={'center'}>

                <div className="navigation">
                    <Typography fontSize={'24px'} fontWeight={'bold'} variant='h1'>
                        {title}
                    </Typography>
                </div>


                <div className="actions">
                    {actions ? actions : null}
                </div>


            </Box>
            <Box >

                {children}
            </Box>

        </>
    )
}
