import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IPC_MESSAGE } from "@nextron-app/common";

const Sectors = () => {
    const [filterCategories, setFilterCategories] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const { i18n } = useTranslation();
    const lang = i18n.language;

    const handleFilter = (cateId: number) => {
        window.ipc.send(IPC_MESSAGE.FILTER_PRODUCT_CATEGORY, { cateId });
    };

    useEffect(() => {
        window.ipc.send(IPC_MESSAGE.GET_LIST_CATEGORIES, {});

        window.ipc.on(IPC_MESSAGE.FILTER_PRODUCT_CATEGORY_REPLY, (arg: any) => {
            setFilterCategories(arg?.categories || []);
        });
        window.ipc.on(IPC_MESSAGE.GET_LIST_CATEGORIES_REPLY, (arg: any) => {
            setListCategories(arg?.categories || []);
        });
    }, []);

    return (
        <div className="flex gap-5 px-4 py-4">
            {listCategories.map((item, id) => {
                return (
                    <button
                        key={id}
                        onClick={() => handleFilter(item.id)}
                        className={`flex items-center rounded-full px-2 py-2 
                        shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)] 
                        ${filterCategories.includes(item.id) ? "bg-primary-200" : "bg-white"}`}
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
