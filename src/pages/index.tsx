import Layout from '@/components/Common/Layout/Layout';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import Home from '@/components/Screens/Home/Home';
import { useEffect, useState } from 'react';

const HomePage = () => {
    return (
        <>
            <Layout>
                <main>
                    <NavBar />
                    <Home />
                    <Footer />
                </main>
            </Layout>
        </>
    );
};

export default HomePage;
