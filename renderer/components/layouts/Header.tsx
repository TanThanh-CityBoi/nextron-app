import { IoIosSearch } from 'react-icons/io';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [lang, setLang] = useState('vi');
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
                            lang == 'vi' ? 'rounded-xl bg-gray-200' : ''
                        }`}
                        onClick={() => setLang('vi')}
                    >
                        <Image src="/icons/vi.png" width={20} height={20}></Image>
                    </button>
                    <button
                        className={`flex items-center px-3 py-1.5 ${
                            lang == 'en' ? 'rounded-xl bg-gray-200' : ''
                        }`}
                        onClick={() => setLang('en')}
                    >
                        <Image src="/icons/en.png" width={20} height={20}></Image>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Header;
