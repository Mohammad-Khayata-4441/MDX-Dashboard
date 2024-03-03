import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React, { PropsWithChildren, createContext, useState } from 'react'

export const ConfirmContext = createContext<((c: Confirm) => any)>(() => { return true });
export interface Confirm {
    message: string,
    title: string,
    onConfirm: () => any | Promise<any>,
    onReject?: () => any | null,
}
export default function FeedBackProvider(props: PropsWithChildren) {
    const [confirm, setConfirmMessage] = useState<(Confirm) | null>({ message: '', title: '', onConfirm: () => false, onReject: () => false })
    const [isLoading, setIsLoading] = useState(false);
    const [isShowing, setShowing] = useState(false)

    const showConfirm = (c: Confirm) => {
        setConfirmMessage(c);
        setShowing(true);
    }

    const handleConfirm = async () => {
        if (confirm) {
            setIsLoading(true)
            await confirm.onConfirm();
            setShowing(false)
            setIsLoading(false)
        }
    }

    const handleReject = async () => {
        if (confirm) {
            setShowing(false)
            await confirm.onReject?.();
        }
    }
    return (
        <>
            <Dialog fullWidth maxWidth='sm' open={isShowing}>

                <DialogTitle>
                    {confirm?.title}
                </DialogTitle>

                <DialogContent>
                    {confirm?.message}
                </DialogContent>


                <DialogActions>
                    <Button onClick={() => handleReject()}>
                        إلغاء
                    </Button>
                    <Button onClick={handleConfirm} variant='contained'>
                        {
                            isLoading ?
                                <CircularProgress color='inherit' variant='indeterminate' size={'18px'} />
                                : "تأكيد"
                        }

                    </Button>
                </DialogActions>
            </Dialog>

            <ConfirmContext.Provider value={showConfirm}>
                {props.children}
            </ConfirmContext.Provider>

        </>

    )
}
