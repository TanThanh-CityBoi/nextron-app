import { IPC_MESSAGE } from '@/common/ipc-message';

const Payment = () => {
    const handlePayment = () => {
        window.ipc.send(IPC_MESSAGE.CREATE_MODAL, {
            ipc_message: IPC_MESSAGE.NOTIFICATION_MODEL_SHOW,
            sub: {
                message_key: 'message.payment_success',
                button_key: 'button.close_title',
                modal_type: 'success',
            },
        });
    };
    //
    return (
        <div className="border-primary-600 flex h-full flex-col justify-between rounded-bl-xl border-b-4 border-s-4 bg-white px-3 py-4 shadow-2xl">
            <div className="p-4">
                <h5 className="font-semibold">Thanh toán</h5>
                <h5 className="font-semibold">MÃ QR</h5>
                <h5 className="font-semibold">Thời gian còn lại: 00:00:01</h5>
            </div>

            <div className="bg-primary-600 w-full py-2">
                <button onClick={() => handlePayment()} className="w-full text-lg text-white">
                    Payment
                </button>
            </div>
        </div>
    );
};
export default Payment;
