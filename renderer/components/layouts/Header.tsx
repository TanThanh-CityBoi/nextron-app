import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LOCALES } from '@/common/constants';

const Header = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || LOCALES.vi);

    const changeLang = (lang: string) => {
        setLang(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <div className="py-auto flex h-full items-center justify-between px-6 py-2 shadow-md">
            <div className="relative aspect-video h-20 px-2">
                <img
                    className="absolute h-full w-full"
                    src="/images/logo-2.png"
                    alt="core-vision.img"
                ></img>
            </div>

            <div className="flex items-center justify-center rounded-xl border border-gray-300 bg-white p-1">
                <button
                    className={`flex items-center px-3 py-1.5 ${
                        lang == LOCALES.vi ? 'bg-primary-200 rounded-lg' : ''
                    }`}
                    onClick={() => changeLang(LOCALES.vi)}
                >
                    <Image alt="icon-vi.png" src="/icons/vi.png" width={20} height={20}></Image>
                </button>
                <button
                    className={`flex items-center px-3 py-1.5 ${
                        lang == LOCALES.en ? 'bg-primary-200 rounded-lg' : ''
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
