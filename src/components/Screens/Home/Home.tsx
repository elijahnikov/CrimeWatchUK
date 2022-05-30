import Layout from '@/components/Common/Layout/Layout';
import DataSection from '@/components/DataSection/DataSection';
import MapSection from '@/components/MapSection/MapSection';
import NavBar from '@/components/NavBar/NavBar';
import SubNav from '@/components/SubNav/SubNav';
import React, { useEffect, useState } from 'react';

interface HomeProps {}

const Home = ({}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://data.police.uk/api/crimes-street/all-crime?lat=51.52089321090866&lng=-0.1146880278553249&date=2022-02'
            );
            if (response.ok) {
                const data = await response.json();
                setData(data[0]);
            }
        };

        fetchData();
    }, []);

    return (
        <Layout>
            <main>
                <section className='h-[100vh] bg-scBlack-300'>
                    {/* <SubNav /> */}
                    {/* <p className='text-white'>{JSON.stringify(data)}</p> */}
                    <MapSection />
                    <DataSection />
                </section>
            </main>
        </Layout>
    );
};

export default Home;
