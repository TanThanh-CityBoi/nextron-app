import { Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <Layout className="h-screen bg-primary-50">
                <Header></Header>

                <main className="h-full">{children}</main>

                <Footer></Footer>
            </Layout>
        </>
    );
};
export default MainLayout;
