import { Confirm, ConfirmContext } from "@/app/components/FeedBackProvider";
import { useContext } from "react";


type FeedbackOptions = { successMessage?: boolean, errorMessage?: boolean, confirm?: Omit<Confirm, 'onConfirm' | 'onReject'> };
type AsyncAction<T, R> = (args?: T) => Promise<R>

const defaultOptions: FeedbackOptions = {
    errorMessage: true,
    successMessage: true,
}

export const useFeedback = () => {
    const makeConfirm = useContext(ConfirmContext);

    return async <T, R>(action: AsyncAction<T, R>, opts: FeedbackOptions, args?: T) => {
        if (opts.confirm) {

            const is = await new Promise((res, rej) => {
                makeConfirm({ ...defaultOptions, ...opts.confirm as Confirm, onConfirm: () => res(true), onReject: () => rej(false) })
            })

            if (is) {
                const res = await action(args);
                return res
            }

        }

        return Promise.reject('REJECTED_BY_USER')
    }



}

