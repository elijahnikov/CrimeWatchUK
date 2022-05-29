import Layout from '@/components/Common/Layout/Layout';
import Footer from '@/components/Footer/Footer';
import Home from '@/components/Screens/Home/Home';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://data.police.uk/api/crimes-street/all-crime?lat=51.52089321090866&lng=-0.1146880278553249&date=2022-02'
            );
            if (response.ok) {
                const data = await response.json();
                console.log(data[0]);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Home />
            <Footer />
        </>
    );
};

export default HomePage;
