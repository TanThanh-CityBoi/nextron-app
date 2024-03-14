import { useRouter } from 'next/router';
import { LANGS } from '@/common/constants';
import { vi, en } from '@renderer/public/lang';

const useTrans = () => {
    const { locale } = useRouter();
    const trans = locale === LANGS.VI ? vi : en;
    return trans;
};

export default useTrans;
