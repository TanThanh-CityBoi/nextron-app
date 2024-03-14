import { sectors } from '@common/mock-data';
import { useRouter } from 'next/router';

const Sectors = () => {
    const router = useRouter();
    const lang = router.locale;

    return (
        <div className="flex gap-5 p-4">
            {sectors.map((item, id) => {
                return (
                    <button
                        key={id}
                        className="bg-primary-200 flex items-center rounded-full p-1 shadow-lg"
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
