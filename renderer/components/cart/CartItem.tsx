import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

import { TiDelete } from 'react-icons/ti';
import Image from 'next/image';
import { IPC_MESSAGE } from '@/common/ipc.message';

const CartItem = (props: {
    id: number;
    name_en: string;
    name_vi: string;
    price: number;
    amount: number;
    thumbnail: string;
}) => {
    const addItem = (id) => {
        window.ipc.send(IPC_MESSAGE.ADD_TO_CART, { id });
    };

    const removeItem = ({ id, amount }: { id: number; amount: number }) => {
        window.ipc.send(IPC_MESSAGE.REMOVE_CART_ITEM, { id, amount });
    };

    return (
        <div className="relative my-3 flex gap-x-4 rounded-xl border border-gray-200 bg-white px-4 py-1 shadow-md">
            <div className="flex items-center justify-center">
                <Image
                    className="rounded-full object-cover"
                    alt="thumbnail.img"
                    src={props.thumbnail}
                    height={70}
                    width={70}
                ></Image>
            </div>
            <div>
                <div>
                    <h5 className="line-clamp-1 font-semibold">{props.name_en}</h5>
                </div>
                <div className="text-lg font-semibold">Đơn giá: {props.price} đ</div>
                <div className="flex gap-x-4 py-2 font-semibold text-gray-400">
                    <div className="text-lg">Số lượng: </div>
                    <div className="flex">
                        <button
                            className="bg-primary-300 rounded-sm px-2 py-1"
                            onClick={() => removeItem({ id: props.id, amount: 1 })}
                        >
                            <FaMinus />
                        </button>
                        <input
                            type="number"
                            max={5}
                            value={props.amount}
                            onChange={() => {}}
                            className="hide-arrows-input w-10 border border-gray-200 text-center text-lg"
                        />
                        <button
                            className="bg-primary-300 rounded-sm px-2 py-1"
                            onClick={() => addItem(props.id)}
                        >
                            <FaPlus />
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute -right-3 -top-4">
                <button onClick={() => removeItem({ id: props.id, amount: props.amount })}>
                    <TiDelete className="text-primary-500" size={35} />
                </button>
            </div>
        </div>
    );
};
export default CartItem;
