import { useRouter } from 'next/router';
import { LOCALES } from '@/common/constants';
import { vi, en } from '@renderer/public/lang';

const useTrans = () => {
    const { locale } = useRouter();
    const trans = locale === LOCALES.vi ? vi : en;
    return trans;
};

export default useTrans;
