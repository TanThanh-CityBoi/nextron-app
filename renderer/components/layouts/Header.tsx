import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { LOCALES } from '@common/constants';

const Header = () => {
    const router = useRouter();
    const [lang, setLang] = useState(router.locale || LOCALES.vi);

    const changeLang = (lang: string) => {
        setLang(lang);
        router.push(router.pathname, router.pathname, { locale: lang });
    };

    return (
        <div className="flex items-start justify-between px-6 py-12">
            <div className="relative aspect-video h-20 px-2">
                <img
                    className="absolute h-full w-full"
                    src="/images/logo-2.png"
                    alt="core-vision.img"
                ></img>
            </div>

            <div className="flex rounded-xl border border-gray-300 p-0.5">
                <button
                    className={`flex items-center px-3 py-1.5 ${
                        lang == LOCALES.vi ? 'rounded-xl bg-gray-200' : ''
                    }`}
                    onClick={() => changeLang(LOCALES.vi)}
                >
                    <Image alt="icon-vi.png" src="/icons/vi.png" width={20} height={20}></Image>
                </button>
                <button
                    className={`flex items-center px-3 py-1.5 ${
                        lang == LOCALES.en ? 'rounded-xl bg-gray-200' : ''
                    }`}
                    onClick={() => changeLang(LOCALES.en)}
                >
                    <Image alt="icon-vi.png" src="/icons/en.png" width={20} height={20}></Image>
                </button>
            </div>
        </div>
    );
};
export default Header;
