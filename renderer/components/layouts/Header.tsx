import { IoIosSearch } from 'react-icons/io';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { LANGS } from '@common/constants';

const Header = () => {
    const [lang, setLang] = useState(LANGS.VI);
    const router = useRouter();

    const changeLang = (lang: string) => {
        setLang(lang);
        router.push(router.pathname, '/', { locale: lang });
    };

    return (
        <div className="flex items-center justify-between px-6 py-12">
            <div className="relative aspect-video h-20 px-2">
                <img
                    className="absolute h-full w-full"
                    src="/images/logo-2.png"
                    alt="core-vision.img"
                ></img>
            </div>

            <div className="flex gap-x-3">
                <div className="bg-primary-100 flex min-w-64 items-center gap-x-2 rounded-xl px-4 py-2">
                    <IoIosSearch size={20} />
                    <div>
                        <input
                            className="bg-primary-100 focus-visible:!outline-none"
                            type="text"
                            placeholder="Tìm kiếm"
                        ></input>
                    </div>
                </div>

                <div className="flex items-center rounded-xl border border-gray-300 p-0.5">
                    <button
                        className={`flex items-center px-3 py-1.5 ${
                            lang == LANGS.VI ? 'rounded-xl bg-gray-200' : ''
                        }`}
                        onClick={() => changeLang(LANGS.VI)}
                    >
                        <Image src="/icons/vi.png" width={20} height={20}></Image>
                    </button>
                    <button
                        className={`flex items-center px-3 py-1.5 ${
                            lang == LANGS.EN ? 'rounded-xl bg-gray-200' : ''
                        }`}
                        onClick={() => changeLang(LANGS.EN)}
                    >
                        <Image src="/icons/en.png" width={20} height={20}></Image>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Header;
