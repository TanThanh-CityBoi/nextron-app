import PrimaryButton from '../ui/button/PrimaryButton';

const Cart = () => {
    const selectedItems = [{}];

    return (
        <div className="flex flex-col justify-between h-full">
            <div className=""></div>
            <div className="p-4">
                <div className="flex justify-between mb-3">
                    <h5>Tổng cộng</h5>
                    <h5>30.000 đ</h5>
                </div>
                <div className="flex justify-end">
                    <PrimaryButton content="Thanh toán"></PrimaryButton>
                </div>
            </div>
        </div>
    );
};
export default Cart;
