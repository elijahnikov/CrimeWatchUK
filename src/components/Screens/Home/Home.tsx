import Layout from '@/components/Common/Layout/Layout';
import NavBar from '@/components/NavBar/NavBar';
import React from 'react';

interface HomeProps {}

const Home = ({}) => {
    return (
        <Layout>
            <main>
                <section className='h-[100vh] bg-scBlack-300'>
                    <NavBar />
                </section>
            </main>
        </Layout>
    );
};

export default Home;
