import { useTranslation } from 'react-i18next';
import { sectors } from '@/mock-data';
import { useEffect, useState } from 'react';
import { IPC_MESSAGE } from '@/common/ipc-message';

const Sectors = () => {
    const [productCategories, setProductCategories] = useState([]);
    const { i18n } = useTranslation();
    const lang = i18n.language;

    const handleFilter = (cateId: number) => {
        window.ipc.send(IPC_MESSAGE.FILTER_PRODUCT_CATEGORY, { cateId });
    };

    useEffect(() => {
        window.ipc.on(IPC_MESSAGE.FILTER_PRODUCT_CATEGORY_REPLY, (arg: any) => {
            setProductCategories(arg?.categories || []);
        });
    }, []);

    return (
        <div className="flex gap-5 p-4">
            {sectors.map((item, id) => {
                return (
                    <button
                        key={id}
                        onClick={() => handleFilter(item.id)}
                        className={`flex items-center rounded-full p-1 shadow-lg ${productCategories.includes(item.id) ? 'bg-primary-200' : 'bg-white'}`}
                    >
                        <div className="relative aspect-square min-h-10 min-w-10 rounded-full">
                            <img
                                className="absolute h-full w-full rounded-full object-cover"
                                src={item.thumbnail}
                                alt="sector.img"
                            ></img>
                        </div>
                        <div className="flex items-center pe-3 ps-2">
                            <h5 className="line-clamp-1 font-semibold">{item?.[`name_${lang}`]}</h5>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

export default Sectors;
