/* eslint-disable react-hooks/rules-of-hooks */
import { useApi } from "@/shared/hooks/useApi";
import { CreatePaymentDto } from "./payment.dto";

export class PaymentAcions {
    static async CreatePayment(sessionId: string, payload: CreatePaymentDto) {
        const res = await useApi('POST', `${sessionId}/payments`, { confirm: { title: 'Create Payment', text: `Create payment with value ${payload.amount.amountInCents} ${payload.amount.currency} , using ${payload.paymentMethod.card.brand}` }, errorMessage: true, successMessage: 'Payment completed successfully', }, payload)
        return res?.data
    }
}