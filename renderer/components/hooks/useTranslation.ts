import { useRouter } from 'next/router';
import * as en from '@/locales/en';
import * as vi from '@/locales/vi';

const useTranslation = (ns: string) => {
    const { locale } = useRouter();

    const localeMapping = {
        vi: vi,
        en: en,
    };

    const trans = localeMapping?.[locale]?.[ns] || vi?.[ns] || {};
    const t = (key: string) => trans?.[key] || key;

    return { t, lang: locale };
};

export default useTranslation;
